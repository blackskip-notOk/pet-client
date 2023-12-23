import { type FC, type RefObject, useEffect, useState } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Button } from '~shared/ui/button'
import { Form } from '~shared/ui/form'
import { FormErrorMessage } from '~shared/ui/formErrorMessage'
import { Input } from '~shared/ui/input'
import { Label } from '~shared/ui/label'

import { useTranslation } from 'react-i18next'
import { isDBError } from '~shared/helpers'
import { DBExceptionEnum } from '~shared/types'
import { LoginFormEnum, LoginFormSchema, type LoginFormType } from './model'
import { useLogin } from './useLogin'

interface LoginFormProps {
	firstInputRef: RefObject<HTMLInputElement>
}

export const LoginForm: FC<LoginFormProps> = () => {
	const { t } = useTranslation('common', { keyPrefix: 'loginPage' })

	const [serverError, setServerError] = useState('')

	const { data, error, isError, isPending, isSuccess, mutate } = useLogin()

	useEffect(() => {
		if (isError && error) {
			const errorData = error.response?.data
			const errorCode = error.response?.status

			if (isDBError(errorData)) {
				const message =
					errorData.cause.name === DBExceptionEnum.enum.UnauthorizedException
						? t('invalidPassword')
						: t('serverError', { errorCode })
				setServerError(message)
			}
		}
	}, [isError, error, t])

	useEffect(() => {
		if (isSuccess && data) {
			console.log(data)
		}
	}, [isSuccess, data])

	const {
		formState: { errors, isDirty },
		handleSubmit,
		register
	} = useForm<LoginFormType>({
		defaultValues: {
			[LoginFormEnum.enum.login]: '',
			[LoginFormEnum.enum.password]: ''
		},
		resolver: zodResolver(LoginFormSchema)
	})

	const onSubmit: SubmitHandler<LoginFormType> = data => {
		console.log(data)
		mutate(data)
	}

	const isSubmitDisabled = !isDirty || isPending

	return (
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<Label>
				{t('loginLabel')}:
				<Input
					aria-errormessage='login-error'
					aria-invalid={errors[LoginFormEnum.enum.login] ? 'true' : 'false'}
					aria-required='true'
					autoComplete='username'
					placeholder={t('loginPlaceholder')}
					type='text'
					{...register(LoginFormEnum.enum.login)}
				/>
			</Label>
			<ErrorMessage as={<FormErrorMessage />} errors={errors} name={LoginFormEnum.enum.login} />
			<Label>
				Password:
				<Input
					aria-errormessage='password-error'
					aria-invalid={errors[LoginFormEnum.enum.password] ? 'true' : 'false'}
					aria-required='true'
					autoComplete='current-password'
					placeholder={t('passwordPlaceholder')}
					type='password'
					{...register(LoginFormEnum.enum.password)}
				/>
			</Label>
			<ErrorMessage as={<FormErrorMessage />} errors={errors} name={LoginFormEnum.enum.password} />
			<Button disabled={isSubmitDisabled} type='submit'>
				{t('button')}
			</Button>
			{serverError && <p>{serverError}</p>}
		</Form>
	)
}
