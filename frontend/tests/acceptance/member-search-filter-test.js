import { module, test } from 'qunit';
import { visit, currentURL, fillin, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | member search filter', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /members', async function(assert) {
    await visit('/members');

    assert.equal(currentURL(), '/members');
  });

  test('should filter table', async function(assert){

     // Create initial data for the table
     server.createList('member', 10);
     /*server.create('member', {firstName: 'Ryan'});
     server.create('member', {firstName: 'Issac'});
     server.create('member', {firstName: 'Jessica'});
     server.create('member', {firstName: 'Fahad'});
     server.create('member', {firstName: 'Shreya'});*/

     await visit('/members');

     //await pauseTest();

     var searchBar = this.element.querySelector('[data-test-members-search]');
     assert.ok(searchBar, 'search bar should not be null');

  });
});
