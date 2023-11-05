export default {
	'./packages/client/**/*.ts?(x)': [
		'prettier --list-different --ignore-unknown --write',
		'eslint --fix --max-warnings=0 --no-warn-ignored'
	],
	'./packages/client/**/*.css': ['stylelint']
}
