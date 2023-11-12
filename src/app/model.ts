import { createEvent, sample } from 'effector'

import { themeApi } from '~entities/theme'

export const pageMounted = createEvent()

sample({
	clock: pageMounted,
	target: [themeApi.themeLoadFx]
})
