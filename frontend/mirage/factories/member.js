import { Factory } from 'ember-cli-mirage';

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
    return faker.random.uuid();
  },
  membershipStartDate() {
    return faker.date.past();
  },
  membershipEndDate() {
    return faker.date.future();
  },
});
