import { PACKAGE_NAME } from '@global/constant/package_name';
import { typescriptDisableTypeAware } from '@module/typescript/rule/typescript_disable_type_aware';

import type { Linter } from 'eslint';

const astroOverride: Linter.Config[] = [
  {
    files: ['**/*.astro'],
    name: `${PACKAGE_NAME}/astro/override`,
    rules: {
      'import/exports-last': 'off',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'style/eol-last': 'off',
      'style/jsx-one-expression-per-line': 'off'
    }
  },
  {
    files: [
      '**/pages/*.astro',
      '**/pages/**/*.astro',
      '**/api/*.astro',
      '**/api/**/*.astro'
    ],
    name: `${PACKAGE_NAME}/astro/unicorn`,
    rules: {
      'unicorn/filename-case': ['off', {
        cases: {
          camelCase: false,
          kebabCase: true,
          pascalCase: false,
          snakeCase: false
        }
      }]
    }
  },
  {
    files: ['**/*.astro/*.ts', '*.astro/*.ts'],
    name: `${PACKAGE_NAME}/astro:typescript`,
    rules: typescriptDisableTypeAware
  }
];

export { astroOverride };