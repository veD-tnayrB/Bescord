import { Meet, meets } from '@community/bescord/meet-model';
import { Socket } from 'socket.io';

export function meet(socket: Socket) {
    socket.on('join-meet', (payload) => {
        const { user, room } = payload;

        const meetAlreadyExist = meets.items.has(room.id);
        if (!meetAlreadyExist) {
            meets.addItem(new Meet(room.id, user));
            socket.join(room.id);
            return;
        };
        console.log(1, meets.items)
        meets.items[room.id].addParticipant(user);
        socket.join(room.id);
        socket.to(room.id).emit('user-joined');
    })
};