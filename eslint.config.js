const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
  expoConfig,
  prettierRecommended,
  {
    ignores: ['dist/*', '.expo/*', 'node_modules/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-shadow': 'error',
      'no-shadow': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/no-default-export': 'error',
      // Noisy false positive on `import styled from 'styled-components/native'`
      'import/no-named-as-default': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-native',
              importNames: ['StyleSheet'],
              message: 'Use styled-components/native instead of StyleSheet.',
            },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports
            ['^\\u0000'],
            // React / React Native first
            ['^react$', '^react-native$', '^react'],
            // External packages
            ['^@?\\w'],
            // FSD layers, upper to lower
            [
              '^@app(/|$)',
              '^@screens(/|$)',
              '^@widgets(/|$)',
              '^@features(/|$)',
              '^@entities(/|$)',
              '^@shared(/|$)',
            ],
            // Relative imports
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]);
