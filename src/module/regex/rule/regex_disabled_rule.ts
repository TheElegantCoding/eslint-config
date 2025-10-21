import type { Linter } from 'eslint';

const regexDisabledRule: Linter.RulesRecord = {
  'regex/grapheme-string-literal': 'off',
  'regex/hexadecimal-escape': 'off',
  'regex/no-control-character': 'off',
  'regex/no-standalone-backslash': 'off',
  'regex/no-super-linear-move': 'off',
  'regex/prefer-escape-replacement-dollar-char': 'off',
  'regex/prefer-lookaround': 'off',
  'regex/prefer-named-backreference': 'off',
  'regex/prefer-named-capture-group': 'off',
  'regex/prefer-regexp-exec': 'off',
  'regex/prefer-regexp-test': 'off',
  'regex/prefer-result-array-groups': 'off',
  'regex/require-unicode-regexp': 'off',
  'regex/require-unicode-sets-regexp': 'off',
  'regex/sort-alternatives': 'off',
  'regex/sort-character-class-elements': 'off',
  'regex/strict': 'off',
  'regex/unicode-escape': 'off',
  'regex/unicode-property': 'off'
};

export { regexDisabledRule };