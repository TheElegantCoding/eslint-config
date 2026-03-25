import { style } from '@module/javascript/rule/style';

import type { Linter } from 'eslint';

const typescriptStylisticTypeChecked: Linter.RulesRecord = {
  'dot-notation': 'off',
  'ts/dot-notation': style['dot-notation'] ?? 'off',
  'ts/non-nullable-type-assertion-style': 'error',
  'ts/prefer-nullish-coalescing': ['error', {
    ignoreConditionalTests: true,
    ignoreTernaryTests: false,
    ignoreMixedLogicalExpressions: true
  }],
  'ts/prefer-optional-chain': 'error',
  'ts/prefer-string-starts-ends-with': 'error'
};

export { typescriptStylisticTypeChecked };