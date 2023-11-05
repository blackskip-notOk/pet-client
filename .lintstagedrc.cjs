module.exports = {
	'*.ts?(x)': [
		'prettier --write --ignore-unknown',
		'stylelint --allow-empty-input',
		'eslint --fix --max-warnings=0 --no-ignore'
	]
}
