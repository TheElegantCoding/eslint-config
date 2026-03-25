import { bestPractice } from '@module/javascript/rule/best_practice';
import { error } from '@module/javascript/rule/error';

import type { Linter } from 'eslint';

const typescriptStrictTypedChecked: Linter.RulesRecord = {
  'no-implied-eval': 'off',
  'no-throw-literal': 'off',
  'prefer-promise-reject-errors': 'off',
  'require-await': 'off',
  'ts/await-thenable': 'error',
  'ts/no-array-delete': 'error',
  'ts/no-base-to-string': 'error',
  'ts/no-confusing-void-expression': 'error',
  'ts/no-duplicate-type-constituents': 'error',
  'ts/no-floating-promises': 'error',
  'ts/no-for-in-array': 'error',
  'ts/strict-boolean-expressions': ['error', {
    allowString: false,
    allowNumber: false,
    allowNullableObject: true
  }],
  'ts/no-implied-eval': error['no-implied-eval'] ?? 'off',
  'ts/no-meaningless-void-operator': 'error',
  'ts/no-misused-promises': ['error', {
    checksVoidReturn: {
      arguments: false,
      attributes: false
    }
  }],
  'ts/no-mixed-enums': 'error',
  'ts/no-redundant-type-constituents': 'error',
  'ts/no-unnecessary-boolean-literal-compare': 'error',
  'ts/no-unnecessary-condition': 'error',
  'ts/no-unnecessary-template-expression': 'error',
  'ts/no-unnecessary-type-arguments': 'error',
  'ts/no-unnecessary-type-assertion': 'error',
  'ts/no-unsafe-argument': 'error',
  'ts/no-unsafe-assignment': 'error',
  'ts/no-unsafe-call': 'error',
  'ts/no-unsafe-enum-comparison': 'error',
  'ts/no-unsafe-member-access': 'error',
  'ts/no-unsafe-return': 'error',
  'ts/only-throw-error': 'error',
  'ts/prefer-includes': 'error',
  'ts/prefer-promise-reject-errors': bestPractice['prefer-promise-reject-errors'] ?? 'off',
  'ts/prefer-reduce-type-parameter': 'error',
  'ts/prefer-return-this-type': 'error',
  'ts/require-await': bestPractice['require-await'] ?? 'off',
  'ts/restrict-plus-operands': 'error',
  'ts/restrict-template-expressions': 'error',
  'ts/unbound-method': 'error',
  'ts/use-unknown-in-catch-callback-variable': 'error'
};

export { typescriptStrictTypedChecked };