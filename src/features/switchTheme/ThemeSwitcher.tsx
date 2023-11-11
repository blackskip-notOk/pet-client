import type { FC, FormEvent } from 'react'

import { useEvent, useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import * as model from '~entities/theme'
import * as modelThemeSwitcher from './model'

import { auto, dark, legend, light, radio, status, switcher } from './index.module.css'

export const ThemeSwitcher: FC = () => {
	const { t } = useTranslation('glossary')

	const theme = useStore(model.$theme)
	const onThemeSave = useEvent(modelThemeSwitcher.themeSaveClicked)
	// const onThemeDelete = useEvent(model.themeDeleteClicked)

	const handleChange = (event: FormEvent<HTMLFieldSetElement>) => {
		const target = event.target as HTMLInputElement

		target.value === 'auto' ? localStorage.removeItem('theme') : localStorage.setItem('theme', target.value)

		// setTheme(target.value)

		document.documentElement.setAttribute('data-theme', target.value)
	}

	const options = [
		{
			className: `${radio} ${light}`,
			value: 'light'
		},
		{
			className: `${radio} ${auto}`,
			value: 'auto'
		},
		{
			className: `${radio} ${dark}`,
			value: 'dark'
		}
	]

	return (
		<fieldset
			className={switcher}
			onChange={handleChange}
		>
			<legend className={legend}>{t('theme')}</legend>
			{options.map(({ className, value }) => (
				<input
					aria-label={value}
					checked={value === theme}
					className={className}
					key={value}
					name='color-theme'
					type='radio'
					value={value}
				/>
			))}
			<div className={status} />
		</fieldset>
	)
}
