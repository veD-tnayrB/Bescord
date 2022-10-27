import { ReactiveModel } from '@community/bescord/reactive-model';
import Peer from 'peerjs';
// import { IRoom } from '@community/bescord/room-model';

class User extends ReactiveModel {
    peer: Peer;

    #stream: MediaStream | undefined = undefined;
    get stream() {
        return this.#stream;
    }

    set stream(newValue: MediaStream) {
        this.#stream = newValue;
        this.triggerEvent('stream-changed');
    }
}

export /*bundle*/ const user = new User();