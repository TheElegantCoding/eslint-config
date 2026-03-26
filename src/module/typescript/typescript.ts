import { PACKAGE_NAME } from '@global/constant/package_name';
import { typescriptGeneralRule } from '@module/typescript/rule/typescript_general';
import { typescriptOverrides } from '@module/typescript/rule/typescript_overrides';
import { typescriptStrict } from '@module/typescript/rule/typescript_strict';
import { typescriptStrictTypedChecked } from '@module/typescript/rule/typescript_strict_typed_checked';
import { typescriptStylistic } from '@module/typescript/rule/typescript_stylistic';
import { typescriptStylisticTypeChecked } from '@module/typescript/rule/typescript_stylistyc_type_checked';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

import type { Linter } from 'eslint';

const typescript: Linter.Config[] = [{
  files: ['**/*.?([cm])[jt]s?(x)'],
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module'
    }
  },
  name: `${PACKAGE_NAME}/typescript`,
  plugins: { ts: pluginTs as unknown as Plugin },
  rules: {
    ...typescriptGeneralRule,
    ...typescriptStrict,
    ...typescriptStrictTypedChecked,
    ...typescriptStylisticTypeChecked,
    ...typescriptStylistic
  }
}, ...typescriptOverrides];

export { typescript };