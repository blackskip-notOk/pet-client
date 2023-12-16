export const BASE_URL = 'api'

const AUTH = 'auth'
const CREATE = 'create'
const LIST = 'list'
const USERS = 'users'
const TODO = 'todo'

export const api = {
	auth: AUTH,
	// auth: {
	// 	auth: AUTH,
	// 	login: `${AUTH}/login`,
	// 	signup: `${AUTH}/signup`
	// },
	todo: {
		create: `${TODO}/${CREATE}`,
		list: `${TODO}/${LIST}`
	},
	users: USERS
} as const

export const httpMethods = {
	DELETE: 'DELETE',
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT'
} as const
