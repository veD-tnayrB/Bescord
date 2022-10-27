import { IUser } from '@community/bescord/user-model';

export /*bundle*/
class Meet {
    roomId: string;
    creator: IUser;
    participants: Array<IUser>;

    constructor(roomId: string, creator: IUser) {
        this.roomId = roomId;
        this.creator = creator;
    }

    addParticipant(newParticipant: IUser) {
        this.participants.push(newParticipant);
    }

    removeParticipant(participantToRemove: IUser) {
        this.participants = this.participants.filter(participant => participant.peer !== participantToRemove.peer);
    }
};