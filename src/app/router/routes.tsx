import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { LazyExamples } from '~pages/examples'
import { HomePage } from '~pages/home'
import { LazyNotFound } from '~pages/notFound'
import { LazyTodo } from '~pages/todo'
import { LazyUsers } from '~pages/users'
import { SuspenseComponent } from '~shared/components'

import { paths } from './paths'

export const routes: Array<RouteObject> = [
	{
		// children: [
		// 	{
		// 		element: <SuspenseComponent LazyComponent={LazyLogin} />,
		// 		path: paths.login,
		// 	},
		// 	{
		// 		element: <SuspenseComponent LazyComponent={LazySignup} />,
		// 		path: paths.signup,
		// 	},
		// ],
		element: <HomePage />,
		errorElement: <SuspenseComponent LazyComponent={LazyNotFound} />,
		path: paths.root,
	},
	{
		element: <SuspenseComponent LazyComponent={LazyUsers} />,
		path: paths.users,
	},
	{
		element: <SuspenseComponent LazyComponent={LazyTodo} />,
		path: paths.todo,
	},
	{
		children: [],
		element: <LazyExamples />,
		errorElement: <SuspenseComponent LazyComponent={LazyNotFound} />,
		path: paths.examples,
	},
]

export const router = createBrowserRouter(routes)
