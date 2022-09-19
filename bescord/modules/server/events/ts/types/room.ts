import { joinToRoom, leaveRoom } from '@community/bescord/controllers';

export function rooms(socket) {
    socket.on('join-room', (payload) => joinToRoom(socket, payload));
    socket.on('leave-room', leaveRoom);
}