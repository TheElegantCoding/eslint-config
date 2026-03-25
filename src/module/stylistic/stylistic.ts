import { PACKAGE_NAME } from '@global/constant/package_name';
import { stylisticGeneralRule } from '@module/stylistic/rule/stylistic_general_rule';
import pluginStylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

const stylistic: Linter.Config = {
  name: `${PACKAGE_NAME}/stylistic`,
  plugins: {
    style: pluginStylistic
  },
  rules: stylisticGeneralRule
};

export { stylistic };