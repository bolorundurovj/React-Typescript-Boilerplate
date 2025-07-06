module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.changelogrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  globals: {
    process: 'readonly'
  },
  overrides: [
    {
      files: ['vite.config.ts', 'vitest.config.ts', '*.config.ts', '*.config.js', '*.config.cjs'],
      env: { node: true },
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['src/test/setup.ts'],
      env: { node: true }
    },
    {
      files: ['*.tsx', '**/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
      }
    }
  ]
} 