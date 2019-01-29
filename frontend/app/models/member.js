import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    fullName: computed('firstName', 'lastName', function(){
        return `${this.firstName} ${this.lastName}`;
    }),
    initials: computed('firstName', 'lastName', function(){
        // If the first or last name is missing, return an empty string
        if(!this.firstName || !this.lastName){
			return '';
        }

		// Get the initials
		const firstInitial = this.firstName.substring(0, 1).toUpperCase();
		const lastInitial = this.lastName.substring(0, 1).toUpperCase();

		return `${firstInitial}${lastInitial}`;
    }),
    toastmastersId: DS.attr('string'),
    membershipStartDate: DS.attr('date'),
    membershipEndDate: DS.attr('date'),
});
