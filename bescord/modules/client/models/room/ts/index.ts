import { ReactiveModel } from '@community/bescord/reactive-model';
// import { IUser } from '@community/bescord/user-model';

export /*bundle*/
class Room extends ReactiveModel {
    id: string;

    #users: Array<any>;
    get users() {
        return this.#users;
    }

    set users(newValue) {
        this.#users = newValue;
        this.triggerEvent('users-list-changed');
    }

    constructor(id) {
        super();
        this.id = id;
    }
}