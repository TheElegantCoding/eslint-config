import { INDENT } from '@global/constant/format_rules';

import type { Linter } from 'eslint';

const htmlGeneralRule: Linter.RulesRecord = {
  '@html-eslint/class-spacing': 'error',
  '@html-eslint/no-obsolete-attrs': 'error',
  'html/attrs-newline': ['error', { closeStyle: 'newline', ifAttrsThan: 2 }],
  'html/element-newline': 'error',
  'html/id-naming-convention': 'error',
  'html/indent': ['error', INDENT],
  'html/lowercase': 'error',
  'html/no-abstract-roles': 'error',
  'html/no-accesskey-attrs': 'error',
  'html/no-aria-hidden-body': 'error',
  'html/no-duplicate-attrs': 'error',
  'html/no-duplicate-id': 'error',
  'html/no-extra-spacing-attrs': 'error',
  'html/no-heading-inside-button': 'error',
  'html/no-ineffective-attrs': 'error',
  'html/no-inline-styles': 'error',
  'html/no-invalid-role': 'error',
  'html/no-multiple-empty-lines': ['error', { max: 1 }],
  'html/no-multiple-h1': 'error',
  'html/no-nested-interactive': 'error',
  'html/no-non-scalable-viewport': 'error',
  'html/no-obsolete-tags': 'error',
  'html/no-positive-tabindex': 'error',
  'html/no-script-style-type': 'error',
  'html/no-skip-heading-levels': 'error',
  'html/no-target-blank': 'error',
  'html/no-trailing-spaces': 'error',
  'html/quotes': ['error', 'single'],
  'html/require-closing-tags': 'error',
  'html/require-doctype': 'error',
  'html/require-frame-title': 'error',
  'html/require-img-alt': 'error',
  'html/require-lang': 'error',
  'html/require-li-container': 'error',
  'html/require-meta-charset': 'error',
  'html/require-meta-description': 'error',
  'html/require-meta-viewport': 'error',
  'html/require-open-graph-protocol': 'error',
  'html/require-title': 'error',
  'html/sort-attrs': ['error', { priority: [] }]
};

export { htmlGeneralRule };