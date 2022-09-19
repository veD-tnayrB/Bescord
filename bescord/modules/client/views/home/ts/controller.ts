import { v4 as uuid } from 'uuid';
import { PageReactWidgetController } from '@beyond-js/react-widgets/controllers';
import { View } from "./views";
import { user } from '@community/bescord/user-model';


export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }

    show() {
        user.id = uuid();
    }
}