import { type FC, useEffect, useMemo, useRef } from 'react'

import { useEvent, useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { type TTheme, themeModel } from '~entities/theme'

import { active, auto, dark, icon, iconsContainer, light, switcher, switcherCaption } from './index.module.css'

export const ThemeSwitcher: FC = () => {
	const { t } = useTranslation('glossary')

	const theme = useStore(themeModel.$theme)
	const onThemeSave = useEvent(themeModel.themeSaveClicked)
	const onThemeDelete = useEvent(themeModel.themeDeleteClicked)

	const autoRef = useRef<HTMLSpanElement | null>(null)
	const lightRef = useRef<HTMLSpanElement | null>(null)
	const darkRef = useRef<HTMLSpanElement | null>(null)

	const themesSwitched: Record<TTheme, () => void> = useMemo(
		() => ({
			auto: () => {
				autoRef.current?.classList.add(active)
				darkRef.current?.classList.remove(active)
				lightRef.current?.classList.remove(active)
			},
			dark: () => {
				darkRef.current?.classList.add(active)
				lightRef.current?.classList.remove(active)
				autoRef.current?.classList.remove(active)
			},
			light: () => {
				autoRef.current?.classList.remove(active)
				lightRef.current?.classList.add(active)
				darkRef.current?.classList.remove(active)
			}
		}),
		[]
	)

	useEffect(() => {
		themesSwitched[theme]()
	}, [theme, themesSwitched])

	const handleClick = () => {
		const themes: Record<TTheme, TTheme> = {
			auto: 'light',
			dark: 'auto',
			light: 'dark'
		}

		const nextTheme = themes[theme]

		if (nextTheme === 'auto') {
			onThemeDelete()
			return
		}

		onThemeSave(nextTheme)
	}

	return (
		<button
			aria-label={t('switchTitle', { theme })}
			className={switcher}
			name='theme switcher'
			type='button'
			onClick={handleClick}
		>
			<div className={iconsContainer}>
				<span className={`${icon} ${auto}`} id='auto' ref={autoRef} />
				<span className={`${icon} ${light}`} id='light' ref={lightRef} />
				<span className={`${icon} ${dark}`} id='dark' ref={darkRef} />
			</div>
			<span className={switcherCaption}>{t('switchTitle', { theme })}</span>
		</button>
	)
}
