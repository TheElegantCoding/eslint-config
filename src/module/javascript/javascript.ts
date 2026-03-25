import { bestPractice } from '@module/javascript/rule/best_practice';
import { error } from '@module/javascript/rule/error';
import { strict } from '@module/javascript/rule/strict';
import { style } from '@module/javascript/rule/style';
import { variable } from '@module/javascript/rule/variable';
import globals from 'globals';

import type { Linter } from 'eslint';
import { PACKAGE_NAME } from '@global/constant/package_name';

const javascript: Linter.Config = {
  name: `${PACKAGE_NAME}/javascript`,
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.es2022,
      ...globals.node
    },
    parserOptions: { ecmaFeatures: { jsx: true } }
  },
  linterOptions: { reportUnusedDisableDirectives: true },
  rules: {
    ...strict,
    ...style,
    ...error,
    ...bestPractice,
    ...variable
  }
};

export { javascript };