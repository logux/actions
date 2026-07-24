import loguxOxlintConfig from '@logux/oxc-configs/lint'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [loguxOxlintConfig],
  ignorePatterns: ['*/errors.ts'],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'typescript/no-explicit-any': 'off'
      }
    }
  ]
})
