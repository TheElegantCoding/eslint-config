import type { Linter } from 'eslint';

const error: Linter.RulesRecord = {
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': ['error', { allowImplicit: true }],
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': ['error', { lexicalBindings: true }],
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-irregular-whitespace': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', {
    ignorePropertyModificationsFor: [
      'acc',
      'accumulator',
      'e',
      'event',
      'ctx',
      'context',
      'req',
      'request',
      'res',
      'node',
      'response',
      '$scope',
      'staticContext'
    ],
    props: true
  }],
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-globals': [
    'error',
    {
      message: 'Use Number.isFinite instead',
      name: 'isFinite'
    },
    {
      message: 'Use Number.isNaN instead',
      name: 'isNaN'
    }
  ],
  'no-restricted-imports': 'error',
  'no-restricted-properties': [
    'error',
    {
      message: 'arguments.callee is deprecated',
      object: 'arguments',
      property: 'callee'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'global',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'self',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'window',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'global',
      property: 'isNaN'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'self',
      property: 'isNaN'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN'
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineGetter__'
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineSetter__'
    },
    {
      message: 'Use the exponentiation operator (**) instead.',
      object: 'Math',
      property: 'pow'
    }
  ],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-setter-return': 'error',
  'no-shadow': ['error', {
    builtinGlobals: false,
    hoist: 'all',
    ignoreOnInitialization: false
  }],
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': ['error', {
    allow: [],
    allowAfterSuper: false,
    allowAfterThis: false,
    enforceInMethodNames: true
  }],
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable': 'error',
  'no-unreachable-loop': ['error', { ignore: [] }],
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: false }],
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
  'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTaggedTemplates: false,
    allowTernary: false
  }],
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  'no-use-before-define': ['error', {
    classes: true,
    functions: true,
    variables: true
  }],
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': ['error', {
    ignoreDestructuring: false,
    ignoreExport: false,
    ignoreImport: false
  }],
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  'no-with': 'error'
};

export { error };