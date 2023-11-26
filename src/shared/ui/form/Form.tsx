import type { FC, FormHTMLAttributes } from "react";
import { form } from "./index.module.css";

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
	children,
	...props
}) => {
	return (
		<form className={form} {...props}>
			{children}
		</form>
	);
};
