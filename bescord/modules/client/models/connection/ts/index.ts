import socketIO from "socket.io-client";
import { ReactiveModel } from '@community/bescord/reactive-model';

class Connection extends ReactiveModel {
    #port = 'http://localhost:3003';
    socket = socketIO(this.#port);
}

export /*bundle*/ const connection = new Connection();