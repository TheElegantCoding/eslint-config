import {
  MAX_DEPTH,
  COMPLEXITY,
  MAX_STATEMENTS
} from '@global/constant/format_rules';

import type { Linter } from 'eslint';

const bestPractice: Linter.RulesRecord = {
  'accessor-pairs': 'error',
  'array-callback-return': ['error', { allowImplicit: true }],
  'class-methods-use-this': ['error', {
    exceptMethods: [
      'render',
      'getInitialState',
      'getDefaultProps',
      'getChildContext',
      'componentWillMount',
      'UNSAFE_componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'UNSAFE_componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'UNSAFE_componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'componentDidCatch',
      'getSnapshotBeforeUpdate'
    ]
  }],
  complexity: ['error', COMPLEXITY],
  'consistent-return': 'error',
  'consistent-this': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  eqeqeq: ['error', 'always'],
  'func-name-matching': ['error', { considerPropertyDescriptor: true }],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-length': ['error', { min: 2 }],
  'init-declarations': 'error',
  'logical-assignment-operators': [
    'error',
    'always',
    { enforceForIfStatements: true }
  ],
  'max-classes-per-file': ['error', 1],
  'max-depth': ['error', MAX_DEPTH],
  'max-lines': ['error', {
    max: 300,
    skipBlankLines: true,
    skipComments: true
  }],
  'max-nested-callbacks': ['error', { max: 3 }],
  'max-params': ['error', { max: 5 }],
  'max-statements': ['error', MAX_STATEMENTS],
  'object-shorthand': [
    'error',
    'always',
    { avoidQuotes: true, ignoreConstructors: false }
  ],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: { array: true, object: false },
      VariableDeclarator: { array: false, object: true }
    },
    { enforceForRenamedProperties: false }
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': ['error', { requireCatchParameter: false }],
  radix: 'error',
  'require-await': 'error',
  'require-yield': 'error',
  'symbol-description': 'error',
  'use-isnan': 'error',
  'valid-typeof': ['error', { requireStringLiterals: true }],
  yoda: 'error'
};

export { bestPractice };