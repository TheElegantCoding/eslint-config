import type { Linter } from 'eslint';

const regexStylisticRule: Linter.RulesRecord = {
  'regex/letter-case': ['error', {
    caseInsensitive: 'lowercase',
    controlEscape: 'lowercase',
    hexadecimalEscape: 'lowercase',
    unicodeEscape: 'lowercase'
  }],
  'regex/match-any': 'error',
  'regex/no-useless-escape': 'error',
  'regex/no-useless-non-capturing-group': 'error',
  'regex/prefer-character-class': 'error',
  'regex/prefer-d': 'error',
  'regex/prefer-named-replacement': 'error',
  'regex/prefer-plus-quantifier': 'error',
  'regex/prefer-question-quantifier': 'error',
  'regex/prefer-star-quantifier': 'error',
  'regex/prefer-unicode-codepoint-escapes': 'error',
  'regex/prefer-w': 'error',
  'regex/sort-flags': 'error'
};

export { regexStylisticRule };