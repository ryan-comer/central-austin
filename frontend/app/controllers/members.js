import Controller from '@ember/controller';

export default Controller.extend({
    query: '',

    actions: {
        onQueryChange() {
            alert(this.query);
        },
    },
});
