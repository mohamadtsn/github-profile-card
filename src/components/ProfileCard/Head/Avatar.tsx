import React from 'react';
import AvatarLoader from "./AvatarLoader";

type Props = {
    avatarUrl: string,
};

export function Avatar(props: Props) {
    return (
        <div className="mt-3 mb-4 flex justify-center">
            <AvatarLoader
                imageSrc={props.avatarUrl}
                placeholderHeight={100}
                placeholderWidth={100}
            />
        </div>
    )
}
