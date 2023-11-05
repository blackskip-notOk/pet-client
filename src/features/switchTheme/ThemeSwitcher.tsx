import type { FC } from 'react'

import { status } from './index.module.scss'

export const ThemeSwitcher: FC = () => {
	// const { t } = useTranslation('glossary')

	// const isBrowserPreferDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

	// const setDEfaultTheme = () => {
	// 	const savedTheme = localStorage.getItem('theme')
	// 	const browserDefault = isBrowserPreferDarkTheme ? 'dark' : 'light'

	// 	savedTheme && document.documentElement.setAttribute('data-theme', savedTheme)

	// 	return savedTheme ?? browserDefault
	// }

	// const [theme, setTheme] = useState<string | null>(setDEfaultTheme)

	// const handleClick = (event: FormEvent<HTMLFieldSetElement>) => {
	// 	const target = event.target as HTMLInputElement

	// 	target.value === 'auto' ? localStorage.removeItem('theme') : localStorage.setItem('theme', target.value)

	// 	setTheme(target.value)

	// 	document.documentElement.setAttribute('data-theme', target.value)
	// }

	// const options = [
	// 	{
	// 		className: `${radio} ${light}`,
	// 		value: 'light',
	// 	},
	// 	{
	// 		className: `${radio} ${auto}`,
	// 		value: 'auto',
	// 	},
	// 	{
	// 		className: `${radio} ${dark}`,
	// 		value: 'dark',
	// 	},
	// ]

	// return (
	// 	<fieldset
	// 		className={switcher}
	// 		onChange={handleClick}
	// 	>
	// 		<legend className={legend}>{t('theme')}</legend>
	// 		{options.map(({ className, value }) => (
	// 			<input
	// 				aria-label={value}
	// 				checked={value === theme}
	// 				className={className}
	// 				key={value}
	// 				name='color-theme'
	// 				type='radio'
	// 				value={value}
	// 			/>
	// 		))}
	// 		<div className={status} />
	// 	</fieldset>
	// )
	return <div className={status} />
}
