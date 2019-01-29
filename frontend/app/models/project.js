import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    minTime: DS.attr('number'),
    maxTime: DS.attr('number'),
    projectUrl: DS.attr('string'),
    evaluationUrl: DS.attr('string'),
});
