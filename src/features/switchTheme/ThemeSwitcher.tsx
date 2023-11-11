import type { FC, FormEvent } from 'react'

import { useTranslation } from 'react-i18next'

import { auto, dark, legend, light, radio, status, switcher } from './index.module.scss'

export const ThemeSwitcher: FC = () => {
	const { t } = useTranslation('glossary')

	// const theme = useStore(model.$theme)
	// const onThemeDelete = useEvent(model.themeDeleteClicked)

	// const [theme, setTheme] = useState<string | null>(setDEfaultTheme)

	const handleClick = (event: FormEvent<HTMLFieldSetElement>) => {
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
			onChange={handleClick}
		>
			<legend className={legend}>{t('theme')}</legend>
			{options.map(({ className, value }) => (
				<input
					aria-label={value}
					// checked={value === theme}
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
