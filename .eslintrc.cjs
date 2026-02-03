module.exports = {
   root: true,
   env: {
      browser: true,
      es2022: true,
      node: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:astro/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
   rules: {
      '@typescript-eslint/no-unused-vars': [
         'warn',
         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   overrides: [
      {
         files: ['*.astro'],
         parser: 'astro-eslint-parser',
         parserOptions: {
            parser: '@typescript-eslint/parser',
            extraFileExtensions: ['.astro'],
         },
         rules: {
            'astro/no-set-html-directive': 'warn',
            'react/no-unknown-property': 'off',
            'react/jsx-key': 'off',
         },
      },
   ],
   ignorePatterns: ['dist', '.astro', 'node_modules', 'build', '*.config.*'],
};
