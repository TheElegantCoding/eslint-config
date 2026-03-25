import pluginImport from 'eslint-plugin-import-x';

import type { Linter } from 'eslint';
import { PACKAGE_NAME } from '@global/constant/package_name';

const imports: Linter.Config = {
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
};

export { imports };