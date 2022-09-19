import { PageReactWidgetController } from '@beyond-js/react-widgets/controllers';
import { user } from '@community/bescord/user-model';
import { routing } from '@beyond-js/kernel/routing';
import { View } from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }

    show() {
        const roomNumber = this.uri.qs.get('nro');

        if (!user.room) routing.pushState('/');
    }
}