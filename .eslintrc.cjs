const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
	root: true,
	env: {
		browser: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:effector/recommended',
		'plugin:effector/scope',
		'plugin:jsonc/recommended-with-jsonc',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:i18next/recommended',
		'prettier'
	],
	overrides: [
		{
			files: ['**/__tests__/*.{t}s?(x)', '**/*.spec.{t}s?(x)'],
			extends: ['plugin:playwright/recommended', 'plugin:testing-library/react']
		},
		{
			files: ['*.json', '*.json5'],
			parser: 'jsonc-eslint-parser'
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2023,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'effector',
		'perfectionist',
		'jsx-a11y',
		'import',
		'i18next'
	],
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.d.ts']
			},
			typescript: { alwaysTryTypes: true },
			alias: {
				extensions: ['.ts', '.tsx'],
				map: [
					['~i18n', './src/app/i18n/index.ts'],
					['~queryClient', './src/app/queryClient/index.ts'],
					['~router', './src/app/router/index.ts'],
					['~pages', './src/app/pages'],
					['~shared', './src/shared'],
					['~entities', './src/entities'],
					['~features', './src/features'],
					['~app', './src/app'],
					['~icons', './public/icons']
				]
			}
		},
		'import/parsers': {
			'@typescript-eslint/parser': [ERROR, ['.ts', '.tsx', '.d.ts']]
		}
	},
	ignorePatterns: ['.eslintrc.cjs', './prettier.config.js'],
	rules: {
		'react-hooks/rules-of-hooks': ERROR,
		'react-hooks/exhaustive-deps': WARN,
		'import/no-unresolved': ERROR,
		'@typescript-eslint/no-explicit-any': ERROR,
		'react/jsx-sort-props': [
			WARN,
			{
				shorthandFirst: true,
				callbacksLast: true,
				ignoreCase: true
			}
		],
		'import/order': [
			WARN,
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before'
					}
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],
		'import/no-named-as-default-member': OFF,
		'i18next/no-literal-string': WARN,
		'@typescript-eslint/consistent-type-imports': WARN,
		'@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
		'perfectionist/sort-objects': [
			ERROR,
			{
				type: 'natural',
				order: 'asc'
			}
		],
		'testing-library/await-async-queries': ERROR,
		'testing-library/no-await-sync-queries': ERROR,
		'testing-library/no-debugging-utils': WARN,
		'testing-library/no-dom-import': OFF
	}
}
