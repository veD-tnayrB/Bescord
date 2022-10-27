import { IUser } from '@community/bescord/user-model';

export /*bundle*/ interface IMeet {
    roomId: string,
    creator: IUser,
    participants: Array<IUser>
}