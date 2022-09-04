import React from 'react';
import {Header} from "./Head/Header";
import {Avatar} from "./Head/Avatar";
import {Button} from "@material-tailwind/react";

type Props = {
    accountInfo: AccountInfo,
    resetCard: Function
}

export function Wrapper(props: Props) {
    return (
        <section className="bg-white py-5 h-[100px] relative">
            <div className="flex justify-center items-center h-100">
                <div className="bg-white w-[380px] border-1 border-dashed border-gray-100 shadow-2xl rounded-lg overflow-hidden">
                    <div className="p-6 text-center">
                        <div className='flex justify-start items-start mb-10'>
                            <Button onClick={() => {
                                props.resetCard()
                            }} type='button' variant='gradient' color='red'><i className="fad fa-circle-chevron-left fa-xl"></i> back
                            </Button>
                        </div>
                        <Avatar avatarUrl={props.accountInfo.avatarUrl} />
                        <Header {...props.accountInfo} />
                        <div className="flex justify-between text-center mt-5 mb-2">
                            <div>
                                <p className="mb-2 text-gray-500 font-semibold">Followers</p>
                                <p className="text-muted font-semibold mb-0">{props.accountInfo?.followers ?? '----'}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-500 font-semibold">Following</p>
                                <p className="text-muted font-semibold mb-0">{props.accountInfo?.following ?? '----'}</p>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-500 font-semibold">
                                    <a className='hover:text-blue-500' rel="noreferrer" target='_blank' href={props.accountInfo?.accountUrl + '?tab=repositories'}>Repositories</a>
                                </p>
                                <p className="text-muted font-semibold mb-0">{props.accountInfo?.repository ?? '----'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
