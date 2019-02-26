import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    /*************************************************************************************

        Personal information

    *************************************************************************************/
    firstName() {
        return faker.name.firstName();
    },

    lastName() {
        return faker.name.lastName();
    },

    email() {
        // Derive the username from the member's first and last names
        return faker.internet.email(this.firstName, this.lastName);
    },

    phone() {
        // Create a phone number (xxx) xxx-xxxx
        return faker.phone.phoneNumberFormat(1);
    },


    /*************************************************************************************

        Toastmasters International information

    *************************************************************************************/
    toastmastersId() {
        // Create an 8-digit number with leading zeroes
        const numDigits = 8;
        let toastmastersId = Math.floor((10 ** numDigits) * Math.random());

        // Pad zeroes to the beginning
        const numPads = numDigits - toastmastersId.toString().length;
        toastmastersId = `${'0'.repeat(numPads)}${toastmastersId}`;

        return toastmastersId;
    },

    membershipStartDate() {
        return faker.date.past();
    },

    membershipEndDate() {
        return faker.date.future();
    },


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    afterCreate(member, server) {
        const availablePathIds = server.db.paths.mapBy('id');

        // We assume that a member is working on 0 (10%), 1 (65%), 2 (20%), or 3 (5%) paths
        // according to the probability distribution above
        const randomInteger = Math.floor(100 * Math.random());
        let numPathsSelected;

        if (randomInteger < 10) {
            numPathsSelected = 0;

        } else if (randomInteger < 75) {
            numPathsSelected = 1;

        } else if (randomInteger < 95) {
            numPathsSelected = 2;

        } else {
            numPathsSelected = 3;

        }

        // Assign paths to the member
        const pathIds = [];

        while (pathIds.length < numPathsSelected) {
            const index = Math.floor(availablePathIds.length * Math.random());
            const pathId = availablePathIds[index];

            if (!pathIds.includes(pathId)) {
                pathIds.push(pathId);
            }
        }

        member.pathIds = pathIds;

        // Save paths information
        member.save();
    },
});