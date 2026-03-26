import { PACKAGE_NAME } from '@global/constant/package_name';

import type { Linter } from 'eslint';

const typescriptOverrides: Linter.Config[] = [
  {
    name: `${PACKAGE_NAME}/typescript/definitions`,
    files: ['**/*.d.ts'],
    rules: {
      'ts/consistent-type-definitions': 'off',
      'ts/triple-slash-reference': 'off',
      'ts/no-explicit-any': 'off',
      'ts/no-unused-vars': 'off'
    }
  },
  {
    name: `${PACKAGE_NAME}/typescript/configs`,
    files: [
      '**/*.config.{js,ts,mjs,cjs}',
      '**/vite.config.ts',
      '**/astro.config.mjs'
    ],
    rules: {
      'ts/no-explicit-any': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-var-requires': 'off',
      'import/no-default-export': 'off'
    }
  },
  {
    name: `${PACKAGE_NAME}/typescript/tests`,
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      'ts/no-explicit-any': 'off',
      'ts/no-non-null-assertion': 'off'
    }
  }
];

export { typescriptOverrides };