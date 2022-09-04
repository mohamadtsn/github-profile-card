// @flow
import {Component} from "react";

type Props = {
    name: string | null | undefined,
    username: string | null | undefined,
    website: string | null | undefined,
    accountUrl: string,
};
type State = {};

export class Header extends Component<Props, State> {
    render() {
        const {name, username, website, accountUrl} = this.props;
        return (
            <>
                <h4 className="mb-2 font-bold">{name ?? '----'}</h4>
                <p className="text-gray-400 mb-4">
                    @{username ?? '----'}
                    <span className="mx-2 text-black font-extrabold">|</span>
                    <a href={`https://` + website}>{this.normalizeWebsiteUrl(website)}</a>
                </p>
                <a rel="noreferrer" target='_blank' href={accountUrl} className="btn-primary">
                    Visit Account
                </a>
            </>
        )
    }

    normalizeWebsiteUrl(url: string | null | undefined) {
        if (!url) {
            return "----";
        }
        let websiteUrl = url.startsWith('http') ? url : 'https://' + url;
        return websiteUrl.length > 25 ? 'Go to Website' : websiteUrl;
    }
}

