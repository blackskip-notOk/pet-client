module.exports = {
	'*.ts?(x)': [
		'yarn dlx @biomejs/biome lint --colors=force --verbose --error-on-warnings --log-level=error src ',
		'yarn dlx @biomejs/biome format src --write'
	],
	'*.css': ['yarn dlx stylelint --aei --color --fix --mw=0 -f --rdd --risd --rd  "**/*.css"']
}
