import { createEvent, createStore, sample } from 'effector'

import * as themeApi from './api'
import { type TTheme } from './api'

export const $theme = createStore<TTheme>('auto')

export const themeDeleteClicked = createEvent()
export const themeSaveClicked = createEvent<TTheme>()
export const themeLoadClicked = createEvent()

sample({
	clock: themeSaveClicked,
	target: [themeApi.themeSaveFx]
})

sample({
	clock: themeDeleteClicked,
	target: [themeApi.themeDeleteFx]
})

$theme.on(themeApi.themeSaveFx, (_, theme) => theme)
$theme.on(themeApi.themeLoadFx.doneData, (_, theme) => theme)
$theme.on(themeApi.themeDeleteFx.done, () => 'auto')
