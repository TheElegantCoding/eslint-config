import { PACKAGE_NAME } from '@global/constant/package_name';
import parserTs from '@typescript-eslint/parser';
import parserAstro from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

import { astroGeneralRule } from './rule/astro_general_rule';
import { astroOverride } from './rule/astro_override';

import type { Linter } from 'eslint';

const astro: Linter.Config[] = [{
  name: `${PACKAGE_NAME}/astro`,
  plugins: { astro: pluginAstro },
  files: ['**/*.astro'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
      Astro: 'readonly',
      Fragment: 'readonly'
    },
    parser: parserAstro,
    parserOptions: { extraFileExtensions: ['.astro'], parser: parserTs }
  },
  rules: astroGeneralRule
}, ...astroOverride];

export { astro };