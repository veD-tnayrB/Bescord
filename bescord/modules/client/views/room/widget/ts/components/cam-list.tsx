import * as React from 'react';
import { Cam } from '../components/cam';
import { useBinder } from '@community/bescord/usebinder';
import { room } from '@community/bescord/room-model';
import { IUser } from '@community/bescord/user-model';
import { connection } from '@community/bescord/connection-model';

export
function CamList(): JSX.Element {
    const [users, setUsers] = React.useState<Array<IUser>>([]);
    useBinder([room], () => setUsers(room.users), 'users-list-changed');
    console.log(0, users);

    React.useEffect(() => {
        connection.socket.on('user-joined', (newUser) => {
            console.log('se ejecuta el joined del usuario ')
            room.users = [newUser, ...room.users];
        });
        // user.peer.call(newUser.peer._id, user.stream)
        // user.peer.on('call', (call) => call.answer(user.stream));
    }, []);

    const usersElements = users.map((user: IUser) => (
        <Cam
            key={user.peer} 
            stream={user.stream} />
    ))

    return (
        <ul>
            {usersElements}
        </ul>
    )
}