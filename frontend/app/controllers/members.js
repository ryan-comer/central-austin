import Controller from '@ember/controller';
import {run} from '@ember/runloop';

export default Controller.extend({
    updateWaitTime: 1000,   // Time to wait before updating table
    query: '',

    actions: {
        onQueryChange() {
            this.set('keyPressed', true);
            this.set('pressedTime', new Date());

            // Wait until the user stops typing
            run.later(this, function(){
                var currentTime = new Date();

                // Check that it's been long enough
                var elapsedTime = currentTime - this.get('pressedTime');
                if(elapsedTime >= this.updateWaitTime){
                    this.filterTable(this.query);
                }
            }, this.updateWaitTime);
        },
    },

    // Filter the table based on the query
    filterTable(){
        const query = this.query.trim().toLowerCase() || '';
        // Update filtered model
        this.set('filteredModel', this.model.filter(member => {
            // Filter by name
            return member.firstName.toLowerCase().includes(query);
        }));
    },
});
