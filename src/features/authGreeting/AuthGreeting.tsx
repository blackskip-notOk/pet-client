import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { authModel } from '~entities/auth'

export const AuthGreeting = () => {
	const { t } = useTranslation('common', { keyPrefix: 'auth' })

	const auth = useUnit(authModel.$auth)

	return <p>{t('welcome', { login: auth ? auth.user.login : 'stranger' })}</p>
}
