import { createEvent, sample } from 'effector'

import { $theme } from '~entities/theme'
import { themeApi } from '~shared/api'

export const pageMounted = createEvent()

sample({
	clock: pageMounted,
	target: [themeApi.themeLoadFx]
})

$theme.on(themeApi.themeLoadFx.doneData, (_, theme) => theme)
