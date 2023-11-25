import type { FC, LabelHTMLAttributes } from "react";

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => {
	return <label {...props}>{children}</label>;
};
