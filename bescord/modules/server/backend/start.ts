import { listen } from '@beyond-js/backend/listen';
import { init, io } from './server';
import { ioListener } from '@community/bescord/socket';

listen();
init();
ioListener(io);