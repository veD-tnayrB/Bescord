import { IMeet } from './meet.types';

class Meets {
    items: Map<string, IMeet>;

    addItem(item: IMeet) { 
        this.items.set(item.roomId, item);
    };
}


export /*bundle*/ const meets = new Meets();
