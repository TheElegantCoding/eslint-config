import { PACKAGE_NAME } from '@global/constant/package_name';
import pluginImport from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';

const imports: Linter.Config[] = [{
  name: `${PACKAGE_NAME}/import`,
  plugins: { import: pluginImport as unknown as Plugin },
  rules: {
    'import/group-exports': 'error',
    'import/no-namespace': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-anonymous-default-export': ['error', { allowCallExpression: false }]
  }
}, {
  files: [
    'astro.config.mjs',
    'vite.config.ts',
    'vite.config.js',
    'eslint.config.js',
    'tsup.config.ts',
    'astro.config.ts',
    'tailwind.config.js'
  ],
  name: `${PACKAGE_NAME}/import/config`,
  rules: { 'import/no-anonymous-default-export': 'off' }
}];

export { imports };