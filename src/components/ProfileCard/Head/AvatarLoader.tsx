import React, {useState} from 'react';
import ContentLoader from "react-content-loader"

type Props = {
    imageSrc: string,
    placeholderWidth: number,
    placeholderHeight: number,
}

function onLoadedImage(event: React.SyntheticEvent<HTMLImageElement, Event>, setIsLoading: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) {
    event.currentTarget.classList.remove('hidden')
    setIsLoading(false)
}

export default function AvatarLoader(props: Props) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <img
                onLoad={(event) => {
                    onLoadedImage(event, setIsLoading)
                }}
                src={props.imageSrc}
                className="max-w-[100%] h-auto w-[100px] hidden rounded-full"
                alt="avatar" />
            {isLoading ?
                <ContentLoader
                    speed={1}
                    width={props.placeholderWidth}
                    height={props.placeholderHeight}
                    viewBox={"0 0 " + props.placeholderWidth + " " + props.placeholderHeight}
                    backgroundColor="#d1d1d1"
                    foregroundColor="#787878">
                    <circle cx="50" cy="50" r="50" />
                </ContentLoader> : null}
        </>
    )
}
