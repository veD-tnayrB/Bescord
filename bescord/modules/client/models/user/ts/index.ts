import { ReactiveModel } from '@community/bescord/reactive-model';
import { IRoom } from '@community/bescord/room-model';

class User extends ReactiveModel {
    id: string;
    room: IRoom;

    #stream: MediaStream = undefined;
    get stream() {
        return this.#stream;
    }

    set stream(newValue: MediaStream) {
        this.#stream = newValue;
        this.triggerEvent('stream-changed');
    }
}

export /*bundle*/ const user = new User();