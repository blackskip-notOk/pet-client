import type { ButtonHTMLAttributes, FC } from "react";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
	return (
		<button type="button" {...props}>
			{children}
		</button>
	);
};
