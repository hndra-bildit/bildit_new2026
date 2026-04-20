import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  // BILD `from-tsx` sources: macros and @/cmsDependencies are for the CMS toolchain, not eslint/tsc.
  {
    ignores: ['**/*.template.tsx']
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
          jsxSingleQuote: false,
          trailingComma: 'none',
          importOrder: ['^(react)$', '^antd', '^styled', '<THIRD_PARTY_MODULES>', '^[/]'],
          arrowParens: 'always',
          endOfLine: 'lf',
          plugins: ['@trivago/prettier-plugin-sort-imports']
        }
      ]
    }
  }
]

export default eslintConfig
