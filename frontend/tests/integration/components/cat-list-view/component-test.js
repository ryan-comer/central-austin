import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cat-list-view', function(hooks) {
    setupRenderingTest(hooks);

    test('We see the table correctly', async function(assert) {
        // Create mock data (we can use Mirage instead)
        this.set('model', [
            {
                fullName: 'Ryan Comer',
                paths: 'Innovative Planning',
                email: 'r.comer@example.com',
                phone: '512-123-4567',
            },
            {
                fullName: 'Jessica Sung',
                paths: 'Presentation Mastery',
                email: 'j.sung@example.com',
                phone: '512-234-5678',
            },
        ]);

        // Render the component
        await render(hbs`{{cat-list-view
            model=model
        }}`);

        assert.dom('[data-test-table]').exists('We see 1 table.');


        /*
            Test the table headers
        */
        const tableHeaders = this.element.querySelectorAll('[data-test-header]');

        /*
            Writing assertions with qunit
        */
        assert.strictEqual(tableHeaders.length, 4, 'We see 4 table headers.');
        assert.strictEqual(tableHeaders[0].textContent.trim(), 'Name', 'The 1st header shows Name.');
        assert.strictEqual(tableHeaders[1].textContent.trim(), 'Paths', 'The 2nd header shows Paths.');
        assert.strictEqual(tableHeaders[2].textContent.trim(), 'Email', 'The 3rd header shows Email.');
        assert.strictEqual(tableHeaders[3].textContent.trim(), 'Phone', 'The 4th header shows Phone.');

        /*
            Writing assertions with qunit-dom
        */
        assert.dom('[data-test-header]')
            .exists({ count: 4 }, 'We see 4 table headers.');

        assert.dom(tableHeaders[0])
            .hasText('Name', 'The 1st header shows Name.');

        assert.dom(tableHeaders[1])
            .hasText('Paths', 'The 2nd header shows Paths.');

        assert.dom(tableHeaders[2])
            .hasText('Email', 'The 3rd header shows Email.');

        assert.dom(tableHeaders[3])
            .hasText('Phone', 'The 4th header shows Phone.');


        /*
            Test the table rows
        */
        const tableRows = this.element.querySelectorAll('[data-test-row]');

        /*
            Writing assertions with qunit
        */
        assert.strictEqual(tableRows.length, 2, 'We see 2 rows.');

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Name"]').textContent.trim(),
            'Ryan Comer',
            'We see the 1st person\'s full name.'
        );

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Paths"]').textContent.trim(),
            '',
            'We see the 1st person\'s paths.'
        );

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Email"]').textContent.trim(),
            'r.comer@example.com',
            'We see the 1st person\'s email.'
        );

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Phone"]').textContent.trim(),
            '512-123-4567',
            'We see the 1st person\'s phone.'
        );

        /*
            Writing assertions with qunit-dom
        */
        assert.dom('[data-test-row]')
            .exists({ count: 2 }, 'We see 2 rows.');

        assert.dom('[data-test-column="Name"]', tableRows[0])
            .hasText('Ryan Comer', 'We see the 1st person\'s full name.');

        assert.dom('[data-test-column="Paths"]', tableRows[1])
            .hasText('', 'We see the 1st person\'s paths.');

        assert.dom('[data-test-column="Email"]', tableRows[2])
            .hasText('r.comer@example.com', 'We see the 1st person\'s email.');

        assert.dom('[data-test-column="Phone"]', tableRows[3])
            .hasText('512-123-4567', 'We see the 1st person\'s phone.');
    });
});