import type { DbError, ErrorWithMessage, ServerError } from '../types'

export function isObject(obj: unknown): obj is object {
	return !!obj && typeof obj === 'object'
}

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
	return isObject(error) && (Object.hasOwn(error, 'statusText') || Object.hasOwn(error, 'message'))
}

export function isServerError(error: unknown): error is ServerError {
	return isObject(error) && Object.hasOwn(error, 'statusCode') && Object.hasOwn(error, 'timestamp')
}

export function isDBError(error: unknown): error is DbError {
	return isServerError(error) && !!('cause' in error) && isObject(error.cause) && Object.hasOwn(error.cause, 'name')
}
