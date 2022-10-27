import { meet } from './events/meet';

export /*bundle*/ const ioListener = (io) => {
    io.on('connect', (socket) => {
        meet(socket);
    });
};