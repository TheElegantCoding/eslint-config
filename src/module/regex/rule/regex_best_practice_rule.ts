import type { Linter } from 'eslint';

const regexBestPracticeRule: Linter.RulesRecord = {
  'regex/confusing-quantifier': 'error',
  'regex/control-character-escape': 'error',
  'regex/negation': 'error',
  'regex/no-dupe-characters-character-class': 'error',
  'regex/no-empty-string-literal': 'error',
  'regex/no-extra-lookaround-assertions': 'error',
  'regex/no-invisible-character': 'error',
  'regex/no-legacy-features': 'error',
  'regex/no-non-standard-flag': 'error',
  'regex/no-obscure-range': 'error',
  'regex/no-octal': 'error',
  'regex/no-trivially-nested-assertion': 'error',
  'regex/no-trivially-nested-quantifier': 'error',
  'regex/no-unused-capturing-group': 'error',
  'regex/no-useless-character-class': 'error',
  'regex/no-useless-flag': 'error',
  'regex/no-useless-lazy': 'error',
  'regex/no-useless-quantifier': 'error',
  'regex/no-useless-range': 'error',
  'regex/no-useless-set-operand': 'error',
  'regex/no-useless-string-literal': 'error',
  'regex/no-useless-two-nums-quantifier': 'error',
  'regex/no-zero-quantifier': 'error',
  'regex/optimal-lookaround-quantifier': 'error',
  'regex/optimal-quantifier-concatenation': 'error',
  'regex/prefer-predefined-assertion': 'error',
  'regex/prefer-quantifier': 'error',
  'regex/prefer-range': 'error',
  'regex/prefer-set-operation': 'error',
  'regex/simplify-set-operations': 'error',
  'regex/use-ignore-case': 'error'
};

export { regexBestPracticeRule };