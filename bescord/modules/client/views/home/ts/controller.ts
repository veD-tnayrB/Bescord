import { PageReactWidgetController } from '@beyond-js/react-widgets/controllers';
import { View } from "./views";
import { user } from '@community/bescord/user-model';
import Peer from 'peerjs';


export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }

    show() {
        user.peer = new Peer();
    }
}