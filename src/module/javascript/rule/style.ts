import type { Linter } from 'eslint';

const style: Linter.RulesRecord = {
  'arrow-body-style': [
    'error',
    'as-needed',
    { requireReturnForObjectLiteral: false }
  ],
  camelcase: ['error', { ignoreDestructuring: false, properties: 'never' }],
  curly: ['error', 'all'],
  'dot-notation': 'error',
  'func-style': ['error', 'expression'],
  'new-cap': ['error', {
    capIsNew: false,
    capIsNewExceptions: [
      'Immutable.Map',
      'Immutable.Set',
      'Immutable.List'
    ],
    newIsCap: true,
    newIsCapExceptions: []
  }],
  'unicode-bom': ['error', 'never']
};

export { style };