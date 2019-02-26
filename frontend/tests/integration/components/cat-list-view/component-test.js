import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | cat-list-view', function(hooks) {
    setupRenderingTest(hooks);

    test('We see the table correctly', async function(assert) {
        // Create mock data (we can use Mirage instead)
        this.set('members', [
            {
                fullName: 'Ryan Comer',
                email: 'r.comer@example.com',
                phone: '(512) 123-4567',
                listOfPaths: 'Engaging Humor, Innovative Planning',
            },
            {
                fullName: 'Jessica Sung',
                email: 'j.sung@example.com',
                phone: '(512) 234-5678',
                listOfPaths: 'Presentation Mastery',
            },
        ]);

        // Render the component
        await render(hbs`{{cat-list-view
            members=members
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
            'Engaging Humor, Innovative Planning',
            'We see the 1st person\'s paths.'
        );

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Email"]').textContent.trim(),
            'r.comer@example.com',
            'We see the 1st person\'s email.'
        );

        assert.strictEqual(
            tableRows[0].querySelector('[data-test-column="Phone"]').textContent.trim(),
            '(512) 123-4567',
            'We see the 1st person\'s phone.'
        );

        assert.strictEqual(
            tableRows[1].querySelector('[data-test-column="Name"]').textContent.trim(),
            'Jessica Sung',
            'We see the 2nd person\'s full name.'
        );

        assert.strictEqual(
            tableRows[1].querySelector('[data-test-column="Paths"]').textContent.trim(),
            'Presentation Mastery',
            'We see the 2nd person\'s paths.'
        );

        assert.strictEqual(
            tableRows[1].querySelector('[data-test-column="Email"]').textContent.trim(),
            'j.sung@example.com',
            'We see the 2nd person\'s email.'
        );

        assert.strictEqual(
            tableRows[1].querySelector('[data-test-column="Phone"]').textContent.trim(),
            '(512) 234-5678',
            'We see the 2nd person\'s phone.'
        );

        /*
            Writing assertions with qunit-dom
        */
        assert.dom('[data-test-row]')
            .exists({ count: 2 }, 'We see 2 rows.');

        assert.dom('[data-test-column="Name"]', tableRows[0])
            .hasText('Ryan Comer', 'We see the 1st person\'s full name.');

        assert.dom('[data-test-column="Paths"]', tableRows[0])
            .hasText('Engaging Humor, Innovative Planning', 'We see the 1st person\'s paths.');

        assert.dom('[data-test-column="Email"]', tableRows[0])
            .hasText('r.comer@example.com', 'We see the 1st person\'s email.');

        assert.dom('[data-test-column="Phone"]', tableRows[0])
            .hasText('(512) 123-4567', 'We see the 1st person\'s phone.');


        assert.dom('[data-test-column="Name"]', tableRows[1])
            .hasText('Jessica Sung', 'We see the 2nd person\'s full name.');

        assert.dom('[data-test-column="Paths"]', tableRows[1])
            .hasText('Presentation Mastery', 'We see the 2nd person\'s paths.');

        assert.dom('[data-test-column="Email"]', tableRows[1])
            .hasText('j.sung@example.com', 'We see the 2nd person\'s email.');

        assert.dom('[data-test-column="Phone"]', tableRows[1])
            .hasText('(512) 234-5678', 'We see the 2nd person\'s phone.');
    });
});