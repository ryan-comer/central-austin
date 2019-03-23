import { module, test } from 'qunit';
import { visit, currentURL, click, typeIn, pauseTest, triggerKeyEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { set } from '@ember/object';

module('Acceptance | member search filter', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /members', async function(assert) {
    await visit('/members');

    assert.equal(currentURL(), '/members');
  });

  test('should filter table', async function(assert){
     // Create the test members
     server.create('member', {
      firstName: 'Ryan',
      lastName: 'Comer',
      paths: [
          server.create('path', {
              name: 'Visionary Communication',
          }),
          server.create('path', {
              name: 'Presentation Mastery',
          }),
      ],
      email: 'r.comer@example.com',
      phone: '(512) 123-4567', 
    });

    server.create('member', {
      firstName: 'Isaac',
      lastName: 'Lee',
      paths: [
          server.create('path', {
              name: 'Visionary Communication',
          }),
          server.create('path', {
              name: 'Presentation Mastery',
          }),
      ],
      email: 'i.lee@example.com',
      phone: '(512) 123-4567', 
      });

     await visit('/members');

     // Start with 2 members
     var membersList = this.element.querySelectorAll('[data-test-row]');
     assert.equal(membersList.length, 2);

     var searchBar = this.element.querySelector('[data-test-members-search]');
     assert.ok(searchBar, 'search bar should not be null');

     //await click(find('[data-test-members-search]'));
     //await triggerKeyEvent(find('[data-test-members-search]'), 'keydown', 'R');

     await pauseTest();

     assert.equal(searchBar.value, "Ryan");
  });
});
