import { lazy } from 'react'

export const LazySignup = lazy(() => import('./Signup').then(module => ({ default: module.Signup })))
