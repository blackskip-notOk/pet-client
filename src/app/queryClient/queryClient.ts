import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { BASE_URL } from './constants'

export const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000
})

export const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			retry: 0
		},
		queries: {
			suspense: true
		}
	}
})
