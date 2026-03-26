import { INDENT, MAX_LINE_LENGTH } from '@global/constant/format_rules';

import type { Linter } from 'eslint';

const stylisticGeneralRule: Linter.RulesRecord = {
  indent: 'off',
  'style/array-bracket-newline': ['error', { minItems: 3 }],
  'style/array-bracket-spacing': 'error',
  'style/arrow-parens': ['error', 'always'],
  'style/arrow-spacing': 'error',
  'style/block-spacing': 'error',
  'style/brace-style': [
    'error',
    '1tbs',
    { allowSingleLine: true }
  ],
  'style/comma-dangle': ['error', 'never'],
  'style/comma-spacing': ['error', { after: true, before: false }],
  'style/comma-style': ['error', 'last'],
  'style/computed-property-spacing': 'error',
  'style/curly-newline': ['error', { minElements: 3, consistent: true }],
  'style/dot-location': ['error', 'property'],
  'style/exp-jsx-props-style': ['error', { singleLine: { maxItems: 3 } }],
  'style/exp-list-style': ['error', { singleLine: { maxItems: 3 } }],
  'style/function-call-spacing': 'error',
  'style/function-paren-newline': ['error', { minItems: 4 }],
  'style/generator-star-spacing': 'error',
  'style/indent': [
    'error',
    INDENT,
    {
      assignmentOperator: 1,
      flatTernaryExpressions: false,
      MemberExpression: 1,
      VariableDeclarator: 'first'
    }
  ],
  'style/indent-binary-ops': ['error', INDENT],
  'style/jsx-child-element-spacing': 'error',
  'style/jsx-closing-tag-location': 'error',
  'style/jsx-curly-brace-presence': 'error',
  'style/jsx-curly-newline': ['error', { multiline: 'forbid', singleline: 'forbid' }],
  'style/jsx-curly-spacing': ['error', { children: true, when: 'never' }],
  'style/jsx-equals-spacing': 'error',
  'style/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'style/jsx-function-call-newline': ['error', 'multiline'],
  'style/jsx-indent-props': ['error', INDENT],
  'style/jsx-max-props-per-line': ['error', { maximum: 2 }],
  'style/jsx-newline': ['error', { allowMultilines: false, prevent: true }],
  'style/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'style/jsx-pascal-case': 'error',
  'style/jsx-quotes': ['error', 'prefer-single'],
  'style/jsx-self-closing-comp': 'error',
  'style/jsx-tag-spacing': 'error',
  'style/jsx-wrap-multilines': ['error', {
    arrow: 'parens-new-line',
    assignment: 'parens-new-line',
    condition: 'parens',
    declaration: 'parens-new-line',
    logical: 'parens',
    prop: 'ignore',
    propertyValue: 'ignore',
    return: 'parens-new-line'
  }],
  'style/key-spacing': 'error',
  'style/keyword-spacing': ['error', { after: true, before: true }],
  'style/line-comment-position': ['error', { applyDefaultIgnorePatterns: true, position: 'above' }],
  'style/lines-around-comment': ['error', {
    afterBlockComment: true,
    afterHashbangComment: true,
    beforeBlockComment: true
  }],
  'style/max-len': [
    'error',
    MAX_LINE_LENGTH,
    INDENT,
    {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }
  ],
  'style/max-statements-per-line': ['error', { max: 2 }],
  'style/member-delimiter-style': 'error',
  'style/multiline-ternary': ['error', 'always-multiline'],
  'style/new-parens': 'error',
  'style/no-confusing-arrow': 'error',
  'style/no-extra-parens': [
    'error',
    'all',
    { ignoreJSX: 'all', nestedBinaryExpressions: false }
  ],
  'style/no-extra-semi': 'error',
  'style/no-floating-decimal': 'error',
  'style/no-mixed-operators': 'error',
  'style/no-mixed-spaces-and-tabs': 'error',
  'style/no-multi-spaces': ['error', { exceptions: { BinaryExpression: false, Property: false }, ignoreEOLComments: true }],
  'style/no-multiple-empty-lines': ['error', {
    max: 1,
    maxBOF: 0,
    maxEOF: 0
  }],
  'style/no-tabs': 'error',
  'style/no-trailing-spaces': ['error', { ignoreComments: false, skipBlankLines: false }],
  'style/no-whitespace-before-property': 'error',
  'style/nonblock-statement-body-position': ['error', 'beside'],
  'style/object-curly-newline': 'error',
  'style/object-curly-spacing': [
    'error',
    'always',
    { emptyObjects: 'never' }
  ],
  'style/one-var-declaration-per-line': ['error', 'always'],
  'style/operator-linebreak': [
    'error',
    'before',
    { overrides: { '=': 'after' } }
  ],
  'style/padded-blocks': [
    'error',
    'never',
    { allowSingleLineBlocks: true }
  ],
  'style/quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  'style/quotes': [
    'error',
    'single',
    { avoidEscape: true }
  ],
  'style/rest-spread-spacing': ['error', 'never'],
  'style/semi': ['error', 'always'],
  'style/semi-spacing': ['error', { after: true, before: false }],
  'style/semi-style': ['error', 'last'],
  'style/space-before-blocks': 'error',
  'style/space-before-function-paren': 'error',
  'style/space-in-parens': ['error', 'never'],
  'style/space-infix-ops': 'error',
  'style/space-unary-ops': 'error',
  'style/spaced-comment': [
    'error',
    'always',
    { block: { exceptions: ['-'], markers: ['/'] } }
  ],
  'style/switch-colon-spacing': 'error',
  'style/template-curly-spacing': 'error',
  'style/template-tag-spacing': 'error',
  'style/type-annotation-spacing': 'error',
  'style/type-generic-spacing': 'error',
  'style/type-named-tuple-spacing': 'error',
  'style/wrap-iife': [
    'error',
    'outside',
    { functionPrototypeMethods: false }
  ],
  'style/wrap-regex': 'error',
  'style/yield-star-spacing': ['error', 'after']
};

export { stylisticGeneralRule };