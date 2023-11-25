import type { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { paths } from '~router'
import { NavigationLink } from '~shared/ui/navigationLink'

import { linkList } from './index.module.css'

export const HeaderNavigation: FC = () => {
	const { t } = useTranslation('common', { keyPrefix: 'navLinks' })

	const navLinks = [
		{
			title: t('login'),
			to: paths.login
		},
		{
			title: t('signup'),
			to: paths.signup
		},
		{
			title: t('users'),
			to: paths.users
		},
		{
			title: t('todo'),
			to: paths.todo
		},
		{
			title: t('examples'),
			to: paths.examples
		}
	]

	const links = navLinks.map(({ title, ...rest }) => (
		<li key={title}>
			<NavigationLink {...rest}>{title}</NavigationLink>
		</li>
	))

	return (
		<nav>
			<ul className={linkList}>{links}</ul>
		</nav>
	)
}
