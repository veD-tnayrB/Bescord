import * as React from "react";
import { routing } from '@beyond-js/kernel/routing';
import { Video } from '@community/bescord/video';
import { MeetForm } from "../components/meet-form";
import { connection } from '@community/bescord/connection-model';
import { user } from '@community/bescord/user-model';

export /*bundle*/
function View(): JSX.Element {

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream: MediaStream) => {
            // user.stream = stream;
        })
    }, []);

    React.useEffect(() => {
        connection.socket.on('user-accepted', (roomId) => {
            routing.pushState(`/room?nro=${roomId}`)
        });
    }, []);

    return (
        <main>
            <Video />
            <MeetForm />
        </main>
    );
}