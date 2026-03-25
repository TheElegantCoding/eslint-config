import { INDENT, MAX_LINE_LENGTH } from '@global/constant/format_rules';
import type { Linter } from 'eslint';

const stylisticGeneralRule: Linter.RulesRecord = {
  indent: 'off',
  'style/comma-dangle': ['error', 'never'],
  'style/comma-style': ['error', 'last'],
  'style/comma-spacing': ['error', { after: true, before: false }],
  'style/no-extra-semi': 'error',
  'style/semi': ['error', 'always'],
  'style/semi-spacing': ['error', { after: true, before: false }],
  'style/semi-style': ['error', 'last'],
  'style/dot-location': ['error', 'property'],
  'style/indent-binary-ops': ['error', INDENT],
  'style/multiline-ternary': ['error', 'always-multiline'],
  'style/no-mixed-operators': 'error',
  'style/space-infix-ops': 'error',
  'style/space-unary-ops': 'error',
  'style/operator-linebreak': [
    'error',
    'before',
    { overrides: { '=': 'after' } }
  ],
  'style/spaced-comment': [
    'error',
    'always',
    { block: { exceptions: ['-'], markers: ['/'] } }
  ],
  'style/jsx-function-call-newline': ['error', 'multiline'],
  'style/jsx-indent-props': ['error', INDENT],
  'style/lines-around-comment': ['error', {
    afterBlockComment: true,
    beforeBlockComment: true,
    afterHashbangComment: true
  }],
  'style/quotes': [
    'error',
    'single',
    { avoidEscape: true }
  ],
  'style/line-comment-position': ['error', { applyDefaultIgnorePatterns: true, position: 'above' }],
  'style/jsx-quotes': ['error', 'prefer-single'],
  'style/function-paren-newline': ['error', { minItems: 4 }],
  'style/quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  'style/indent': [
    'error',
    INDENT,
    {
      VariableDeclarator: 'first',
      assignmentOperator: 1,
      MemberExpression: 1,
      flatTernaryExpressions: false
    }
  ],
  'style/brace-style': [
    'error',
    '1tbs',
    { allowSingleLine: true }
  ],
  'style/no-extra-parens': [
    'error',
    'all',
    { nestedBinaryExpressions: false, ignoreJSX: 'all' }
  ],
  'style/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens',
    logical: 'parens',
    prop: 'ignore',
    propertyValue: 'ignore'
  }],
  'style/no-multiple-empty-lines': ['error', {
    max: 1,
    maxBOF: 0,
    maxEOF: 0
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
  'style/wrap-iife': [
    'error',
    'outside',
    { functionPrototypeMethods: false }
  ],
  'style/object-curly-newline': 'error',
  'style/curly-newline': ['error', { minElements: 3 }],
  'style/new-parens': 'error',
  'style/wrap-regex': 'error',
  'style/max-statements-per-line': ['error', { max: 2 }],
  'style/member-delimiter-style': 'error',
  'style/nonblock-statement-body-position': ['error', 'beside'],
  'style/one-var-declaration-per-line': ['error', 'always'],
  'style/padded-blocks': [
    'error',
    'never',
    { allowSingleLineBlocks: true }
  ],
  'style/no-tabs': 'error',
  'style/no-floating-decimal': 'error',
  'style/no-confusing-arrow': 'error',
  'style/jsx-closing-tag-location': 'error',
  'style/type-named-tuple-spacing': 'error',
  'style/jsx-curly-brace-presence': 'error',
  'style/jsx-curly-newline': ['error', { multiline: 'forbid', singleline: 'forbid' }],
  'style/jsx-equals-spacing': 'error',
  'style/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'style/jsx-max-props-per-line': ['error', { maximum: 2 }],
  'style/jsx-newline': ['error', { allowMultilines: false, prevent: true }],
  'style/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'style/jsx-pascal-case': 'error',
  'style/exp-jsx-props-style': ['error', { singleLine: { maxItems: 3 } }],
  'style/jsx-self-closing-comp': 'error',
  'style/array-bracket-spacing': 'error',
  'style/arrow-spacing': 'error',
  'style/block-spacing': 'error',
  'style/computed-property-spacing': 'error',
  'style/function-call-spacing': 'error',
  'style/generator-star-spacing': 'error',
  'style/jsx-child-element-spacing': 'error',
  'style/jsx-curly-spacing': ['error', { when: 'never', children: true }],
  'style/jsx-tag-spacing': 'error',
  'style/key-spacing': 'error',
  'style/keyword-spacing': ['error', { after: true, before: true }],
  'style/exp-list-style': ['error', { singleLine: { maxItems: 3 } }],
  'style/no-mixed-spaces-and-tabs': 'error',
  'style/no-multi-spaces': ['error', { ignoreEOLComments: true, exceptions: { Property: false, BinaryExpression: false } }],
  'style/no-trailing-spaces': ['error', { ignoreComments: false, skipBlankLines: false }],
  'style/no-whitespace-before-property': 'error',
  'style/object-curly-spacing': [
    'error',
    'always',
    { emptyObjects: 'never' }
  ],
  'style/rest-spread-spacing': ['error', 'never'],
  'style/space-before-blocks': 'error',
  'style/space-before-function-paren': 'error',
  'style/space-in-parens': ['error', 'never'],
  'style/switch-colon-spacing': 'error',
  'style/template-curly-spacing': 'error',
  'style/template-tag-spacing': 'error',
  'style/type-annotation-spacing': 'error',
  'style/type-generic-spacing': 'error',
  'style/yield-star-spacing': ['error', 'after'],
  'style/arrow-parens': ['error', 'always'],
  'style/array-bracket-newline': ['error', { minItems: 3 }]
};

export { stylisticGeneralRule };