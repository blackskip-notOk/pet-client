export const BASE_URL = "api";

const AUTH = "auth";
const CREATE = "create";
const LIST = "list";
const USERS = "users";
const TODO = "todo";

export const api = {
	auth: AUTH,
	signup: `${AUTH}/signup`,
	login: `${AUTH}/login`,
	logout: `${AUTH}/logout`,
	todo: {
		create: `${TODO}/${CREATE}`,
		list: `${TODO}/${LIST}`,
	},
	users: USERS,
} as const;

export const httpMethods = {
	DELETE: "DELETE",
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
} as const;

export const queryKeys = {
	auth: 'auth',
} as const;
