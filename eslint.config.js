import loguxTsConfig from '@logux/eslint-config/ts'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['**/errors.ts']
  },
  ...loguxTsConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['processing/index.d.ts'],
    rules: {
      'import/export': 'off',
      'prefer-let/prefer-let': 'off'
    }
  }
]
