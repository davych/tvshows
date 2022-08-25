module.exports = {
  plugins: [
    'import',
    'jest',
    'react-hooks',
    'react'
  ],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'react-app',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['craco.config.js'],
  rules: {
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-console': 'error',
    'no-array-constructor': 'error',
    'import/newline-after-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-duplicates': 'error',
    'vars-on-top': 'error',
    'no-shadow': [
      'off',
      {
        builtinGlobals: false,
        hoist: 'never',
        allow: ['props', 'state', 'data', 'value']
      }
    ],
    'prefer-const': 'error',

    'jest/no-disabled-tests': 'off',
    'jest/no-identical-title': 'error',

    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false
      }
    ],

    'react/display-name': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    },
    'import/external-module-folders': ['node_modules'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
  }
}
