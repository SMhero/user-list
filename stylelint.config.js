module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: '**/*.tsx',
  rules: {
    'color-hex-length': 'long',
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local'],
    }],
  },
};
