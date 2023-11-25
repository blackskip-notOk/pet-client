import type { FC, FormHTMLAttributes } from "react";

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
	return <form {...props}>{children}</form>;
};
