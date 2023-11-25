import { useEffect, useState } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { isDBError } from '~shared/helpers'
import { DBExceptionEnum, type TServerError } from '~shared/types'
import { Button } from '~shared/ui/button'
import { Form } from '~shared/ui/form'
import { FormErrorMessage } from '~shared/ui/formErrorMessage'
import { Input } from '~shared/ui/input'
import { Label } from '~shared/ui/label'

import { signup } from './api'
import { SignupFormSchema, type TSignupForm, type TSignupResponse } from './model'

export const SignupForm = () => {
	const { t } = useTranslation('common', { keyPrefix: 'signup' })

	const [serverError, setServerError] = useState('')

	const { data, error, isError, isPending, isSuccess, mutate, variables } = useMutation<
		AxiosResponse<TSignupResponse>,
		AxiosError<TServerError>,
		TSignupForm
	>({
		mutationFn: signup
	})

	useEffect(() => {
		if (isError && error) {
			const { response, status } = error
			if (response?.data && isDBError(response.data)) {
				const message =
					response.data.cause.name === DBExceptionEnum.enum.PrismaClientKnownRequestError
						? t('userExist', { login: variables.login })
						: t('serverError', { errorCode: status })
				setServerError(message)
			}
		}
	}, [isError, error, t, variables.login])

	useEffect(() => {
		if (isSuccess && data) {
			console.log(data)
		}
	}, [isSuccess, data])

	const {
		formState: { errors, isDirty },
		handleSubmit,
		register
	} = useForm<TSignupForm>({
		defaultValues: { login: '', password: '' },
		resolver: zodResolver(SignupFormSchema)
	})

	const onSubmit: SubmitHandler<TSignupForm> = data => {
		mutate(data)
	}

	const isSubmitDisabled = !isDirty || isPending

	return (
		<>
			<div>{serverError}</div>
			<Form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Label>
					{t('loginLabel')}:
					<Input
						aria-errormessage='login-error'
						aria-invalid={errors.login ? 'true' : 'false'}
						aria-required='true'
						autoComplete='username'
						placeholder={t('loginPlaceholder')}
						type='login'
						{...register('login')}
					/>
				</Label>
				<ErrorMessage as={<FormErrorMessage />} errors={errors} name='login' />
				<Label>
					{t('passwordLabel')}:
					<Input
						aria-errormessage='password-error'
						aria-invalid={errors.password ? 'true' : 'false'}
						aria-required='true'
						autoComplete='current-password'
						placeholder={t('passwordPlaceholder')}
						type='password'
						{...register('password')}
					/>
				</Label>
				<ErrorMessage as={<FormErrorMessage />} errors={errors} name='password' />
				<Button disabled={isSubmitDisabled} type='submit'>
					{t('button')}
				</Button>
			</Form>
		</>
	)
}
