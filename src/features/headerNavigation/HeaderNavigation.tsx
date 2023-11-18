import type { FC } from 'react'

import { NavigationLink } from '~shared/ui/navigationLink'

import { linkList } from './index.module.css'
import { navLinks } from './navLinks'

export const HeaderNavigation: FC = () => {
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
