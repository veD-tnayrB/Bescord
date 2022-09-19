import * as React from 'react';
import { Cam } from '../components/cam';
import { useBinder } from '@community/bescord/usebinder';
import { user, IUser } from '@community/bescord/user-model';

export
function CamList(): JSX.Element {
    const [users, setUsers] = React.useState<Array<IUser>>(user.room.users);
    useBinder([user], () => setUsers(user.room.users), 'users-list-changed');

    const usersElements = users.map((user: IUser) => (
        <Cam
            key={user.id} 
            stream={user.stream} />
    ))

    return (
        <ul>
            {usersElements}
        </ul>
    )
}