import type { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import { paths } from '~router'

export const Examples: FC = () => {
	return (
		<>
			<h2>Examples</h2>
			<NavLink to={paths.root}>Home Page</NavLink>
			<article>
				<Outlet />
			</article>
		</>
	)
}
