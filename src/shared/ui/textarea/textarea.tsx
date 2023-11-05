import { forwardRef, type TextareaHTMLAttributes } from 'react'

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
	function TextArea(props, ref) {
		return (
			<textarea
				ref={ref}
				{...props}
			/>
		)
	}
)
