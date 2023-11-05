import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import effectorPlugin from 'eslint-plugin-effector'
import i18nextPlugin from 'eslint-plugin-i18next'
import importPlugin from 'eslint-plugin-import'
import jsoncPlugin from 'eslint-plugin-jsonc'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import playwrightPlugin from 'eslint-plugin-playwright'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import rtlPlugin from 'eslint-plugin-testing-library'
import jsoncEslintParser from 'jsonc-eslint-parser'

const OFF = 0
const WARN = 1
const ERROR = 2

export default [
	prettierConfig,
	{
		files: ['./packages/client/src/**/*.ts', './packages/client/src/**/*.tsx'],
		ignores: ['**/*.css', '**/*.scss'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				emitDecoratorMetadata: true,
				project: './tsconfig.json',
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: true,
		},
		plugins: {
			tsc: typescriptPlugin,
			react: reactPlugin,
			reactHooks: reactHooksPlugin,
			perfectionist: perfectionistPlugin,
			effector: effectorPlugin,
			i18next: i18nextPlugin,
			import: importPlugin,
			jsonc: jsoncPlugin,
			jsxA11y: jsxA11yPlugin,
			playwright: playwrightPlugin,
			rtl: rtlPlugin,
		},
		rules: {
			'tsc/no-explicit-any': ERROR,
			'tsc/consistent-type-imports': WARN,
			'tsc/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
			'perfectionist/sort-objects': [ERROR, { type: 'natural', order: 'asc' }],
			'react/jsx-sort-props': [WARN, { shorthandFirst: true, callbacksLast: true, ignoreCase: true }],
			'react/react-in-jsx-scope': OFF,
			'reactHooks/rules-of-hooks': ERROR,
			'reactHooks/exhaustive-deps': WARN,
			'i18next/no-literal-string': WARN,
			'import/no-unresolved': ERROR,
			quotes: [ERROR, 'single', { avoidEscape: true }],
			'sort-vars': [WARN, { ignoreCase: true }],
			'spaced-comment': [WARN, 'always', { exceptions: ['-', '+'], markers: ['/'] }],
			'object-curly-spacing': [WARN, 'always'],
			semi: [WARN, 'never'],
			'keyword-spacing': [WARN],
			'jsx-quotes': [WARN, 'prefer-single'],
			'import/order': [
				WARN,
				{
					groups: ['builtin', 'external', 'internal'],
					pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
					pathGroupsExcludedImportTypes: ['react'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
				'import/parsers': { typescriptEslintParser: [ERROR, ['.ts', '.tsx', '.d.ts']] },
				alias: {
					extensions: ['.ts', '.tsx', 'json'],
					map: [
						['~i18n', './src/app/i18n'],
						['~queryClient', './src/app/queryClient'],
						['~router', './src/app/router'],
						['~pages', './src/pages'],
						['~shared', './src/shared'],
						['~entities', './src/entities'],
						['~features', './src/features'],
						['~icons', './public/icons'],
					],
				},
				ignore: ['*.svg', '*.module.scss'],
			},
		},
	},
	{
		files: ['*.json', '*.json5', '*.jsonc'],
		languageOptions: {
			parser: jsoncEslintParser,
			parserOptions: {
				jsonSyntax: 'JSON5',
			},
		},
	},
]
