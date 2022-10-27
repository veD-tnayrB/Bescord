import { ReactiveModel } from '@community/bescord/reactive-model';

export /*bundle*/
class Room extends ReactiveModel {
    id: string;

    #users: Array<any> = [];
    get users() {
        return this.#users;
    }

    set users(newValue) {
        this.#users = newValue;
        this.triggerEvent('users-list-changed');
    }
}

export /*bundle*/ const room = new Room();