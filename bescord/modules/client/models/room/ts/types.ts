import { IUser } from '@community/bescord/user-model';

export /*bundle*/
interface IRoom {
    id: string,
    users: Array<IUser>
}