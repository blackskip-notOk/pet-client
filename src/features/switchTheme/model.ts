import { createEvent, sample } from 'effector'

import { $theme } from '~entities/theme'
import { themeApi, type TTheme } from '~shared/api'

export const themeDeleteClicked = createEvent()
export const themeSaveClicked = createEvent<TTheme>()
export const themeLoadClicked = createEvent()

sample({
	clock: themeSaveClicked,
	target: [themeApi.themeSaveFx]
})

$theme.on(themeApi.themeSaveFx, (_, theme) => theme)
