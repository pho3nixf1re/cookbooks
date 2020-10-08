module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier',
  ],
  rules: {
    /// built-in rules ///

    // lowerCamelCase - our standard for classes used in JavaScript
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    // kebab-case - a reference for special-case projects not used in JavaScript
    // 'selector-class-pattern': '^([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$',
    'color-hex-length': 'long',
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-missing-generic-family-keyword': null,
    // This rule seems to be broken and in conflict with others.
    'function-parentheses-space-inside': null,
    // This rule mangles camelCase sass functions.
    'function-name-case': null,
    'max-nesting-depth': 3,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],

    /// Order plugin rules ///

    // This is set in sass-guidelines but we want to use SMACSS
    'order/properties-alphabetical-order': null,

    /// SCSS plugin rules ///

    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/percent-placeholder-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/at-function-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/at-import-partial-extension-blacklist': null,
  },
};
