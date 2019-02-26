import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    /*************************************************************************************

        Personal information

    *************************************************************************************/
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),


    /*************************************************************************************

        Toastmasters International information

    *************************************************************************************/
    toastmastersId: DS.attr('string'),
    membershipStartDate: DS.attr('date'),
    membershipEndDate: DS.attr('date'),


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    paths: DS.hasMany('path'),


    /*************************************************************************************

        Computed properties

    *************************************************************************************/
    fullName: computed('firstName', 'lastName', function() {
        return `${this.firstName} ${this.lastName}`;
    }),

    initials: computed('firstName', 'lastName', function() {
        // If the first or last name is missing, return an empty string
        if (!this.firstName || !this.lastName) {
            return '';
        }

        // Get the initials
        const firstInitial = this.firstName.substring(0, 1).toUpperCase();
        const lastInitial = this.lastName.substring(0, 1).toUpperCase();

        return `${firstInitial}${lastInitial}`;
    }),

    listOfPaths: computed('paths.@each.name', function() {
        const pathNames = this.get('paths').mapBy('name')
            .sort((a, b) => {
                const value1 = (a || '').toLowerCase();
                const value2 = (b || '').toLowerCase();

                if (value1 > value2) return 1;
                if (value1 < value2) return -1;
                return 0;
            });
        return pathNames.join(', ');
    }),
});