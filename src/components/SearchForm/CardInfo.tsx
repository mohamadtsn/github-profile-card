import {Component, SyntheticEvent} from 'react';
import axios from "axios";
import {Form} from "./Form";
import {Wrapper} from "../ProfileCard/Wrapper";
import Loader from "../ProfileCard/Loader";
import AlertBox from "./AlertBox";

type Props = {};
type State = {
    username: string,
    accountInfo: AccountInfo | null,
    isLoading: boolean,
    requestError: {
        hasError: boolean,
        errors: Array<RequestError>
    },
};

export default class CardInfo extends Component<Props, State> {

    state: State = {
        username: "",
        accountInfo: null,
        isLoading: false,
        requestError: {
            hasError: false,
            errors: []
        },
    }

    constructor(props: Props) {
        super(props);

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmitGetAccount = this.handleSubmitGetAccount.bind(this);
        this.resetCard = this.resetCard.bind(this);
    }

    getGithubAccountInfo(username: string) {
        return axios({
            method: "get",
            url: `https://api.github.com/users/${username}`,
        })
    }

    handleSubmitGetAccount(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        this.setState({
            accountInfo: null,
            isLoading: true,
        })
        this.getGithubAccountInfo(this.state.username)
            .then(res => {
                if (!res.data.message) {
                    this.setState({
                        ...this.state,
                        accountInfo: {
                            username: res.data.login,
                            avatarUrl: res.data.avatar_url,
                            name: res.data.name,
                            bio: res.data.bio,
                            following: res.data.following,
                            followers: res.data.followers,
                            website: res.data.blog,
                            accountUrl: res.data.html_url,
                            repository: res.data.public_repos,
                            repositoryUrl: res.data.repos_url,
                        },
                        isLoading: false,
                    })
                }
            }).catch((err) => {
                if (err.response.status === 404) {
                    let Errors = this.state.requestError.errors
                    Errors.push({
                        title: 'Request Error: ',
                        message: err.response.data.message + '!',
                        type: 'error',
                    })
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        requestError: {
                            hasError: true,
                            errors: Errors
                        },
                    })
                }
            }
        )
    }

    handleChangeUsername(e: SyntheticEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            username: e.currentTarget.value,
        })
    }

    resetCard() {
        this.setState({
            ...this.state,
            accountInfo: null,
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <Loader />
                </div>
            )
        }

        return (
            this.state.accountInfo ?
                <Wrapper resetCard={this.resetCard} accountInfo={this.state.accountInfo} /> :
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="/assets/images/github-dark.png"
                                alt="Workflow" />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">GitHub Profile</h2>
                        </div>
                        {this.state.requestError.hasError ? <AlertBox alerts={this.state.requestError.errors} /> : null}
                        <Form handleChangeUsername={this.handleChangeUsername} handleSubmitGetAccount={this.handleSubmitGetAccount} />
                    </div>
                </div>
        )
    }
}
