import Controller from '@ember/controller';
import {run} from '@ember/runloop';
import {computed} from '@ember/object';

export default Controller.extend({
    query: '',

    // Member list that's actually displayed in the table
    filteredMembers: computed('model.@each.fullName', 'query', function(){
        const query = (this.query || '').trim().toLowerCase();

        return this.model.filter(member => {
            const fullName = member.fullName.replace(/ /g, '');

            return fullName.toLowerCase().includes(query);
        }).sortBy('fullName');
    }),

    init(){
        this._super(...arguments);

        this.setProperties({
            query: '',
        })
    },

});
