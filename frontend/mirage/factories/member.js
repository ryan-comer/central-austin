import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    firstName() {
        return faker.name.firstName();
    },

    lastName() {
        return faker.name.lastName();
    },

    email() {
        return faker.internet.email();
    },

    phone() {
        return faker.phone.phoneNumber();
    },

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
});