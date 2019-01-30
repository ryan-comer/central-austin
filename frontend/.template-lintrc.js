'use strict';

module.exports = {
    extends: 'recommended',
    rules: {
        'attribute-indentation': {
            'element-open-end': 'new-line',
            'mustache-open-end': 'new-line',
            'indentation': 4,
            'process-elements': true,
        },
        'block-indentation': 4,
        'inline-link-to': true,
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        'no-bare-strings': true,
//        'no-extra-mut-helper-argument': true,
        'no-inline-styles': false, // go against the recommended
//        'no-negated-condition': true,
        'no-trailing-dot-in-path-expression': true,
        'no-trailing-spaces': true,
    },
};