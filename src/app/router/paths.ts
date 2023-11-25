export const paths = {
	examples: "examples",
	login: "login",
	root: "/",
	signup: "signup",
	todo: "todo",
	users: "users",
} as const;

export type pathsType = keyof typeof paths;
