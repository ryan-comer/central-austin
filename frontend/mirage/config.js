export default function() {
    /*
        Shorthand cheatsheet:

        this.get('/posts');
        this.post('/posts');
        this.get('/posts/:id');
        this.put('/posts/:id'); // or this.patch
        this.del('/posts/:id');

        https://www.ember-cli-mirage.com/docs/advanced/shorthands
    */

    /*************************************************************************************

        Path model

    *************************************************************************************/
    this.get('/paths');
    this.get('/paths/:id');


    /*************************************************************************************

        Member model

    *************************************************************************************/
    this.get('/members');
}