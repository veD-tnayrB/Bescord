import { rooms } from './types/room';

export /*bundle*/ const ioListener = (io) => {
    io.on('connect', (socket) => {
        rooms(socket);
    });
}