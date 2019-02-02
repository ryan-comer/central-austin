import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

// we will use ember-fetch in lieu of ajax
export default DS.RESTAdapter.extend(AdapterFetch, {
});
