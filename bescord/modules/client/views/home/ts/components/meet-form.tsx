import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { connection } from '@community/bescord/connection-model';
import { user } from '@community/bescord/user-model';
import { Room } from '@community/bescord/room-model';

export
function MeetForm(): JSX.Element {
    const [roomId, setRoomId] = React.useState<string>(uuid());
    function handleChanges(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        setRoomId(value);
    }

    function enterMeet(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        user.room = new Room(roomId);
        connection.socket.emit('join-room', { user, room: user.room });
    }

    return (
        <form onSubmit={enterMeet}>
            <label htmlFor="roomId">Room code:</label>
            <input 
                id="roomId" 
                value={roomId} 
                onChange={handleChanges} 
                placeholder="Insert a room code..." />
            <button 
                type="submit">
                Enter Meet
            </button>
        </form>
    )
}