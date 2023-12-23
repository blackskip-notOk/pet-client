import { z } from 'zod'

const ErrorWithMessageSchema = z.object({
	message: z.string().optional(),
	statusText: z.string().optional()
})

export type ErrorWithMessage = z.infer<typeof ErrorWithMessageSchema>

const ServerErrorSchema = z.object({
	message: z.string(),
	path: z.string(),
	stack: z.string(),
	statusCode: z.number(),
	timestamp: z.date()
})

export type ServerError = z.infer<typeof ServerErrorSchema>

export const dbExceptionEnum = z.enum([
	'PrismaClientKnownRequestError',
	'PrismaClientUnknownRequestError',
	'PrismaClientRustPanicError',
	'PrismaClientInitializationError',
	'PrismaClientValidationError',
	'UnauthorizedException'
])

export const dbErrorSchema = ServerErrorSchema.extend({
	cause: z.object({
		clientVersion: z.string(),
		code: z.string(),
		meta: z.object({ target: z.array(z.string()) }),
		name: dbExceptionEnum
	})
})

export type DbError = z.infer<typeof dbErrorSchema>
