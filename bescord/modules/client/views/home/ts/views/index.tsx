import * as React from "react";
import { Video } from '@community/bescord/video';
import { MeetForm } from "../components/meet-form";
import { user } from '@community/bescord/user-model';

export /*bundle*/
function View(): JSX.Element {

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream: MediaStream) => {
            user.stream = stream;
        });
    }, []);

    return (
        <main>
            <Video />
            <MeetForm />
        </main>
    );
}