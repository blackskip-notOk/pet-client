export default {
	'./src/**/*.ts?(x)': [
		'prettier --list-different --ignore-unknown --write',
		'eslint --fix --max-warnings=0 --no-warn-ignored',
	],
	'./src/**/*.scss': ['stylelint'],
}
