import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model() {
        return hash({
            members: this.store.findAll('member'),
            paths: this.store.findAll('path'),
        });
    },

    setupController(controller, model){
        this._super(...arguments);
        controller.set('query', '');
    },
});
