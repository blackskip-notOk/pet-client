import { createStore } from 'effector'

import type { TTheme } from '~shared/api'

export const $theme = createStore<TTheme>('auto')
