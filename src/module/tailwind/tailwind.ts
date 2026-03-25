import pluginTailwind from 'eslint-plugin-tailwindcss';

import type { Linter } from 'eslint';

const tailwind: Linter.Config = {
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } }
  },
  name: 'tailwind',
  plugins: { tailwind: pluginTailwind },
  rules: {
    'tailwind/classnames-order': 'error',
    'tailwind/enforces-negative-arbitrary-values': 'error',
    'tailwind/enforces-shorthand': 'error',
    'tailwind/migration-from-tailwind-2': 'error',
    'tailwind/no-contradicting-classname': 'error'
  }
};

export { tailwind };