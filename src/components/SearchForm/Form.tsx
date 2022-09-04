import React from 'react';

type Props = {
    handleSubmitGetAccount: Function,
    handleChangeUsername: Function,
};

export function Form(props: Props) {
    return (
        <form className="mt-8 space-y-6"
              action=""
              method="post"
              onSubmit={(e) => {
                  props.handleSubmitGetAccount(e)
              }}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="github_username" className="sr-only">GitHub Username</label>
                    <input
                        id="github_username"
                        name="username"
                        type="text"
                        required={true}
                        onChange={(e) => {
                            props.handleChangeUsername(e)
                        }}
                        className="relative block w-full px-3 py-2 border-2 transition-colors border-gray-400 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Your GitHub username" />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center transition-all py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get Info
                </button>
            </div>
        </form>
    )
}
