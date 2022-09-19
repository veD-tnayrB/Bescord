import { IRoom } from '@community/bescord/room-model';

export /*bundle*/
interface IUser {
    id: string;
    room: IRoom;
    stream: MediaStream
}