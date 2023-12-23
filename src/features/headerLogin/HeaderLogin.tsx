import { type FC } from 'react'

import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { authModel } from '~entities/auth'
import { loginLink, navlink } from '~entities/header/index.module.css'
import { paths } from '~router'
import loginSvg from '~shared/assets/login.svg'
import logoutSvg from '~shared/assets/logout.svg'
import { logoutButton, logoutIcon } from './index.module.css'
import { useLogout } from './useLogout'

export const HeaderLogin: FC = () => {
	const { t } = useTranslation('common', { keyPrefix: 'header' })

	const auth = useUnit(authModel.$auth)

	const { mutate } = useLogout()

	const handleLogout = () => {
		mutate()
	}

	if (auth) {
		return (
			<button className={logoutButton} type='button' onClick={handleLogout}>
				<img alt={t('iconAltText', { path: 'logout' })} className={logoutIcon} src={logoutSvg} />
			</button>
		)
	}

	return (
		<NavLink aria-label={t('linkAriaLabel', { path: paths.login })} className={navlink} to={paths.login}>
			<img alt={t('iconAltText', { path: paths.login })} className={loginLink} src={loginSvg} />
		</NavLink>
	)
}
