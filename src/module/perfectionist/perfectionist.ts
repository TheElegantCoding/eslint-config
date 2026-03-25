import { perfectionistGeneralRule } from '@module/perfectionist/rule/perfectionist_general_rule';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

import type { Linter } from 'eslint';

const perfectionist: Linter.Config = {
  name: 'perfectionist',
  plugins: { perfectionist: pluginPerfectionist as unknown as Plugin },
  rules: perfectionistGeneralRule
};

export { perfectionist };