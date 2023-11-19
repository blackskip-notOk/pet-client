import { useRef, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { en, ru, select, selectCaption } from './index.module.css'

export const LanguageSelector: FC = () => {
	const { i18n, t } = useTranslation('glossary')

	const buttonRef = useRef<HTMLButtonElement>(null)

	const handleClick = () => {
		if (buttonRef.current) {
			if (i18n.resolvedLanguage === 'en') {
				buttonRef.current.classList.add(ru)
				buttonRef.current.classList.remove(en)
			} else {
				buttonRef.current.classList.remove(ru)
				buttonRef.current.classList.add(en)
			}
		}
	}

	const handleAnimationEnd = () => {
		i18n.changeLanguage(i18n.resolvedLanguage === 'ru' ? 'en' : 'ru')
	}

	return (
		<button
			aria-label={t('selectTitle', { lng: i18n.resolvedLanguage })}
			className={select}
			ref={buttonRef}
			onAnimationEnd={handleAnimationEnd}
			onClick={handleClick}
		>
			<span
				aria-hidden='true'
				className={selectCaption}
			>
				{t('lng')}
			</span>
		</button>
	)
}
