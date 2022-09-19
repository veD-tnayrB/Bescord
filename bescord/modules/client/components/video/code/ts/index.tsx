import * as React from 'react';
import { user } from '@community/bescord/user-model';
import { useBinder } from '@community/bescord/usebinder';

export /*bundle*/
function Video(): JSX.Element {
    const [stream, setStream] = React.useState(user.stream);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useBinder([user], () => {
        setStream(user.stream);
    }, 'stream-changed');

    React.useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.srcObject = stream;
    }, [stream]);

    return (
        <video controls ref={videoRef} autoPlay muted />
    )
}