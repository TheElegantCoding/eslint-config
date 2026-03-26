import { PACKAGE_NAME } from '@global/constant/package_name';

import type { Linter } from 'eslint';

const jsonOverride: Linter.Config[] = [{
  files: ['**/package.json'],
  name: `${PACKAGE_NAME}/json/sort-package-json`,
  rules: {
    'json/sort-array-values': ['error', { order: { type: 'asc' }, pathPattern: '^files$' }],
    'json/sort-keys': [
      'error',
      {
        order: [
          'publisher',
          'name',
          'displayName',
          'description',
          'author',
          'license',
          'version',
          'private',
          'funding',
          'homepage',
          'repository',
          'keywords',
          'categories',
          'sideEffects',
          'bugs',
          'type',
          'packageManager',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig'
        ],
        pathPattern: '^$'
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$'
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$'
      },
      {
        order: [
          'types',
          'import',
          'require',
          'default'
        ],
        pathPattern: '^exports.*$'
      }
    ],
    'jsonc/auto': 'off'
  }
}, {
  files: ['**/tsconfig.json', '**/tsconfig.*.json'],
  name: `${PACKAGE_NAME}/json/sort-tsconfig`,
  rules: {
    'json/sort-keys': [
      'error',
      {
        order: [
          'extends',
          'compilerOptions',
          'references',
          'files',
          'include',
          'exclude'
        ],
        pathPattern: '^$'
      },
      {
        order: [
          'incremental',
          'composite',
          'tsBuildInfoFile',
          'disableSourceOfProjectReferenceRedirect',
          'disableSolutionSearching',
          'disableReferencedProjectLoad',
          'target',
          'jsx',
          'jsxFactory',
          'jsxFragmentFactory',
          'jsxImportSource',
          'lib',
          'moduleDetection',
          'noLib',
          'reactNamespace',
          'useDefineForClassFields',
          'emitDecoratorMetadata',
          'experimentalDecorators',
          'baseUrl',
          'rootDir',
          'rootDirs',
          'customConditions',
          'module',
          'moduleResolution',
          'moduleSuffixes',
          'noResolve',
          'paths',
          'resolveJsonModule',
          'resolvePackageJsonExports',
          'resolvePackageJsonImports',
          'typeRoots',
          'types',
          'allowArbitraryExtensions',
          'allowImportingTsExtensions',
          'allowUmdGlobalAccess',
          'allowJs',
          'checkJs',
          'maxNodeModuleJsDepth',
          'strict',
          'strictBindCallApply',
          'strictFunctionTypes',
          'strictNullChecks',
          'strictPropertyInitialization',
          'allowUnreachableCode',
          'allowUnusedLabels',
          'alwaysStrict',
          'exactOptionalPropertyTypes',
          'noFallthroughCasesInSwitch',
          'noImplicitAny',
          'noImplicitOverride',
          'noImplicitReturns',
          'noImplicitThis',
          'noPropertyAccessFromIndexSignature',
          'noUncheckedIndexedAccess',
          'noUnusedLocals',
          'noUnusedParameters',
          'useUnknownInCatchVariables',
          'declaration',
          'declarationDir',
          'declarationMap',
          'downlevelIteration',
          'emitBOM',
          'emitDeclarationOnly',
          'importHelpers',
          'importsNotUsedAsValues',
          'inlineSourceMap',
          'inlineSources',
          'mapRoot',
          'newLine',
          'noEmit',
          'noEmitHelpers',
          'noEmitOnError',
          'outDir',
          'outFile',
          'preserveConstEnums',
          'preserveValueImports',
          'removeComments',
          'sourceMap',
          'sourceRoot',
          'stripInternal',
          'allowSyntheticDefaultImports',
          'esModuleInterop',
          'forceConsistentCasingInFileNames',
          'isolatedModules',
          'preserveSymlinks',
          'verbatimModuleSyntax',
          'skipDefaultLibCheck',
          'skipLibCheck'
        ],
        pathPattern: '^compilerOptions$'
      }
    ],
    'jsonc/auto': 'off'
  }
}];

export { jsonOverride };