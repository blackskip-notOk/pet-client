import type { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { HeaderNavigation } from '~features/headerNavigation'
import { ThemeSwitcher } from '~features/switchTheme'
import eyes from '~icons/eyes.svg'
import { paths } from '~router'

import { header, iconsContainer, logo, navlink } from './index.module.scss'

export const Header: FC = () => {
	const { t } = useTranslation('common', { keyPrefix: 'header' })

	return (
		<header className={header}>
			<NavLink
				className={navlink}
				to={paths.root}
			>
				<img
					alt={t('logoAltText')}
					className={logo}
					src={eyes}
				/>
			</NavLink>
			<HeaderNavigation />
			<div className={iconsContainer}>
				<ThemeSwitcher />
				<div>lang</div>
				<div>profile</div>
			</div>
		</header>
	)
}
