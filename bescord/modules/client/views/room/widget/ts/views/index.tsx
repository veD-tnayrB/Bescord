import * as React from "react";
import { AcceptUserMessage } from '../components/accept-user-message';
import { connection } from '@community/bescord/connection-model';
import { IUser } from '@community/bescord/user-model';
import { Video } from '@community/bescord/video';
import { CamList } from "../components/cam-list";


export /*bundle*/
function View(): JSX.Element {
    const [incomingUser, setIncomingUser] = React.useState<IUser | undefined>(undefined);
    const theresSomeIncomingUser = incomingUser;

    React.useEffect(() => {
        connection.socket.on('user-want-enter', (user) => setIncomingUser(user));
    }, []);

    return (
        <>
            {
                theresSomeIncomingUser &&
                <AcceptUserMessage 
                    incomingUser={incomingUser} 
                    setIncomingUser={setIncomingUser} />
            }
            
            <Video />
            <CamList />
        </>
    );
}