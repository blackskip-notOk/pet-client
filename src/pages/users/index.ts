import { lazy } from 'react'

export const LazyUsers = lazy(() => import('./Users').then(module => ({ default: module.Users })))
