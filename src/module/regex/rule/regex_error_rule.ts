import type { Linter } from 'eslint';

const regexErrorRule: Linter.RulesRecord = {
  'regex/no-contradiction-with-assertion': 'error',
  'regex/no-dupe-disjunctions': 'error',
  'regex/no-empty-alternative': 'error',
  'regex/no-empty-capturing-group': 'error',
  'regex/no-empty-character-class': 'error',
  'regex/no-empty-group': 'error',
  'regex/no-empty-lookarounds-assertion': 'error',
  'regex/no-escape-backspace': 'error',
  'regex/no-invalid-regexp': 'error',
  'regex/no-lazy-ends': 'error',
  'regex/no-misleading-capturing-group': 'error',
  'regex/no-misleading-unicode-character': 'error',
  'regex/no-missing-g-flag': 'error',
  'regex/no-optional-assertion': 'error',
  'regex/no-potentially-useless-backreference': 'error',
  'regex/no-super-linear-backtracking': 'error',
  'regex/no-useless-assertions': 'error',
  'regex/no-useless-backreference': 'error',
  'regex/no-useless-dollar-replacements': 'error'
};

export { regexErrorRule };