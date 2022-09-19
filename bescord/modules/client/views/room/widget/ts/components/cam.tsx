import * as React from 'react';

interface Props {
    stream: any
}

export
function Cam({ stream }: Props): JSX.Element {

    return (
        <li>
            <video src={stream} autoPlay controls />
        </li>
    )
}