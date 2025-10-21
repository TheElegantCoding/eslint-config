import type { Linter } from 'eslint';

const unicornDisabledRule: Linter.RulesRecord =
{
  'unicorn/expiring-todo-comments': 'off',
  'unicorn/import-style': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-keyword-prefix': 'off',
  'unicorn/numeric-separators-style': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-set-has': 'off',
  'unicorn/prefer-export-from': [ 'off', { ignoreUsedVariables: true } ],
};

export { unicornDisabledRule };