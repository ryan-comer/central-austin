'use strict';

module.exports = {
    extends: 'recommended',
    rules: {
        'attribute-indentation': {
            'indentation': 4,
        },
        'block-indentation': 4,
        'inline-link-to': true,
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        'no-bare-strings': true,
        'no-inline-styles': false, // go against the recommended
        'no-trailing-dot-in-path-expression': true,
        'no-trailing-spaces': true,
    },
};