import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | member search filter', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /members', async function(assert) {
    await visit('/members');

    assert.equal(currentURL(), '/members');
  });
});
