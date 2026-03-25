import { INDENT } from '@global/constant/format_rules';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';

import type { Linter } from 'eslint';

const jsonGeneralRule: Linter.RulesRecord = {
  'json/array-bracket-newline': stylisticGeneralRule['style/array-bracket-newline'] ?? 'off',
  'json/array-bracket-spacing': stylisticGeneralRule['style/array-bracket-spacing'] ?? 'off',
  'json/array-element-newline': stylisticGeneralRule['style/array-element-newline'] ?? 'off',
  'json/comma-dangle': stylisticGeneralRule['style/comma-dangle'] ?? 'off',
  'json/comma-style': stylisticGeneralRule['style/comma-style'] ?? 'off',
  'json/indent': ['error', INDENT],
  'json/key-spacing': stylisticGeneralRule['style/key-spacing'] ?? 'off',
  'json/no-bigint-literals': 'error',
  'json/no-binary-expression': 'error',
  'json/no-binary-numeric-literals': 'error',
  'json/no-comments': 'error',
  'json/no-dupe-keys': 'error',
  'json/no-escape-sequence-in-identifier': 'error',
  'json/no-floating-decimal': 'error',
  'json/no-hexadecimal-numeric-literals': 'error',
  'json/no-infinity': 'error',
  'json/no-irregular-whitespace': 'error',
  'json/no-multi-str': 'error',
  'json/no-nan': 'error',
  'json/no-number-props': 'error',
  'json/no-numeric-separators': 'error',
  'json/no-octal': 'error',
  'json/no-octal-escape': 'error',
  'json/no-octal-numeric-literals': 'error',
  'json/no-parenthesized': 'error',
  'json/no-plus-sign': 'error',
  'json/no-regexp-literals': 'error',
  'json/no-sparse-arrays': 'error',
  'json/no-template-literals': 'error',
  'json/no-undefined-value': 'error',
  'json/no-unicode-codepoint-escapes': 'error',
  'json/no-useless-escape': 'error',
  'json/object-curly-newline': stylisticGeneralRule['style/object-curly-newline'] ?? 'off',
  'json/object-curly-spacing': ['error', 'always'],
  'json/object-property-newline': stylisticGeneralRule['style/object-property-newline'] ?? 'off',
  'json/quote-props': ['error', 'always'],
  'json/quotes': [
    'error',
    'double',
    { avoidEscape: false }
  ],
  'json/space-unary-ops': 'error',
  'json/valid-json-number': 'error',
  'json/vue-custom-block/no-parsing-error': 'error',
  'no-irregular-whitespace': 'off'
};

export { jsonGeneralRule };