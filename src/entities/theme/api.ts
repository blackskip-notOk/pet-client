import { createEffect } from 'effector'

export type TTheme = 'dark' | 'light' | 'auto'

const LocalStorageThemeKey = 'theme'

export function loadTheme(): TTheme {
	const loadedTheme = localStorage.getItem(LocalStorageThemeKey) as TTheme

	if (loadedTheme) {
		document.documentElement.setAttribute('data-theme', loadedTheme)

		return loadedTheme
	}

	return 'auto'
}

export function saveTheme(theme: TTheme) {
	localStorage.setItem(LocalStorageThemeKey, theme)
	document.documentElement.setAttribute('data-theme', theme)
}

export function deleteTheme() {
	localStorage.removeItem(LocalStorageThemeKey)
	document.documentElement.removeAttribute('data-theme')
}

export const themeLoadFx = createEffect(() => loadTheme())
export const themeSaveFx = createEffect((theme: TTheme) => saveTheme(theme))
export const themeDeleteFx = createEffect(() => deleteTheme())
