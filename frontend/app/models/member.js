import DS from 'ember-data';
import {computed} from '@ember/object'

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  fullName: computed('firstName', 'lastName', function(){
    return `${this.firstName} ${this.lastName}`
  }),
  initials: computed('firstName', 'lastName', function(){
    // First or last name not complete, return empty string
    if(this.firstName.length === 0 || this.lastName.length === 0){
      return ""
    }else{
      return `${this.firstName[0].toLowerCase()}${this.lastName[0].toLowerCase()}`
    }
  }),
  toastmastersId: DS.attr('string'),
  membershipStartDate: DS.attr('date'),
  membershipEndDate: DS.attr('date')
});
