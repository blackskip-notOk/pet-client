import { createEffect } from 'effector'

export type TTheme = 'dark' | 'light' | 'auto'

const LocalStorageThemeKey = 'theme'

export function loadTheme() {
	const loadedTheme = localStorage.getItem(LocalStorageThemeKey) as TTheme

	if (loadedTheme) {
		document.documentElement.setAttribute('data-theme', loadedTheme)

		return loadedTheme
	}

	const isBrowserPreferDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

	const browserDefault = isBrowserPreferDarkTheme ? 'dark' : 'light'

	return browserDefault
}

export function saveTheme(theme: TTheme) {
	localStorage.setItem(LocalStorageThemeKey, theme)
}

export function deleteTheme() {
	localStorage.removeItem(LocalStorageThemeKey)
}

export const themeLoadFx = createEffect(() => loadTheme())

export const themeSaveFx = createEffect((theme: TTheme) => saveTheme(theme))

export const themeDeleteFx = createEffect(() => deleteTheme())
