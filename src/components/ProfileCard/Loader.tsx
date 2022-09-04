import React from 'react';
import ContentLoader from "react-content-loader"

type Props = {};

function Loader(props: Props) {
    return (
        <ContentLoader
            speed={1}
            width={380}
            height={356}
            viewBox="0 0 380 356"
            backgroundColor="#d1d1d1"
            foregroundColor="#787878">
            <circle cx="188" cy="82" r="50" />
            <rect x="132" y="158" rx="5" ry="5" width="115" height="15" />
            <rect x="79" y="188" rx="5" ry="5" width="102" height="15" />
            <rect x="199" y="188" rx="5" ry="5" width="102" height="15" />
            <rect x="18" y="250" rx="5" ry="5" width="104" height="19" />
            <rect x="138" y="250" rx="5" ry="5" width="104" height="19" />
            <rect x="258" y="250" rx="5" ry="5" width="104" height="19" />
        </ContentLoader>
    );
}

export default Loader;
