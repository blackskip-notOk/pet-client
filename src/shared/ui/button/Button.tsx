import type { ButtonHTMLAttributes, FC } from 'react'
import { button } from './index.module.css'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
	return (
		<button className={button} type={props.type} {...props}>
			{children}
		</button>
	)
}
