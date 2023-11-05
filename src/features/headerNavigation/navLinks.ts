import i18n from '~i18n'
import { paths, type pathsType } from '~router'

type navLinksType = Array<{
	title: string
	to: pathsType
}>

export const navLinks: navLinksType = [
	{
		title: i18n.t('navLinks.login', { ns: 'common' }),
		to: paths.login,
	},
	{
		title: i18n.t('navLinks.signup', { ns: 'common' }),
		to: paths.signup,
	},
	{
		title: i18n.t('navLinks.users', { ns: 'common' }),
		to: paths.users,
	},
	{
		title: i18n.t('navLinks.todo', { ns: 'common' }),
		to: paths.todo,
	},
	{
		title: i18n.t('navLinks.examples', { ns: 'common' }),
		to: paths.examples,
	},
]
