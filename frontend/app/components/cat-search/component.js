import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super();
        this.query = '';
    },

    actions: {
        onQueryChange() {
            alert(this.query);
        },
    },
});
