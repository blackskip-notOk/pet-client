import type { FC } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '~shared/ui/button'
import { Form } from '~shared/ui/form'
import { FormErrorMessage } from '~shared/ui/formErrorMessage'
import { Input } from '~shared/ui/input'
import { Label } from '~shared/ui/label'
import { TextArea } from '~shared/ui/textarea'

import { createTodo } from './api'
import { CreateTodoFormSchema, type TCreateTodoForm, type TCreateTodoResponse } from './model'

export const CreateTodoForm: FC = () => {
	const { t } = useTranslation('common', { keyPrefix: 'createTodo' })

	const { mutate } = useMutation<AxiosResponse<TCreateTodoResponse>, AxiosError, TCreateTodoForm>({
		mutationFn: createTodo
	})

	const {
		formState: { errors, isDirty },
		handleSubmit,
		register
	} = useForm<TCreateTodoForm>({
		defaultValues: { content: '', name: '' },
		resolver: zodResolver(CreateTodoFormSchema)
	})

	const onSubmit: SubmitHandler<TCreateTodoForm> = data => {
		mutate(data)
	}

	const isSubmitDisabled = !isDirty

	return (
		<article>
			<h2>{t('title')}</h2>
			<Form
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<Label>
					{t('name')}
					<Input
						aria-errormessage='name-error'
						aria-invalid={errors.name ? 'true' : 'false'}
						aria-required='true'
						placeholder={t('namePlaceholder')}
						type='text'
						{...register('name')}
					/>
				</Label>
				<ErrorMessage
					as={<FormErrorMessage />}
					errors={errors}
					name='name'
				/>
				<Label>
					{t('content')}
					<TextArea
						aria-errormessage='content-error'
						aria-invalid={errors.content ? 'true' : 'false'}
						aria-required='true'
						placeholder={t('contentPlaceholder')}
						{...register('content')}
					/>
				</Label>
				<ErrorMessage
					as={<FormErrorMessage />}
					errors={errors}
					name='content'
				/>
				<Button
					disabled={isSubmitDisabled}
					type='submit'
				>
					{t('button')}
				</Button>
			</Form>
		</article>
	)
}
