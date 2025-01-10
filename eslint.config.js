import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.test.{js,jsx,mjs,cjs}'], // Match test files
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest globals
      },
    },
  },
  {
    rules: {
      // Disable the rule that requires React to be in scope when using JSX
      'react/react-in-jsx-scope': 'off',
    },
  },
];
