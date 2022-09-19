import * as React from 'react';
import { connection } from '@community/bescord/connection-model';

export
function AcceptUserMessage({ incomingUser, setIncomingUser }): JSX.Element {

    function acceptUser(): void {
        connection.socket.emit('user-acepted', incomingUser);
        setIncomingUser(undefined);
    }

    return (
        <article>
            <h2>Accept user</h2>
            <button onClick={acceptUser}>
                Accept User
            </button>
        </article>
    )
}