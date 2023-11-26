import type { FC, LabelHTMLAttributes } from "react";
import { label } from "./index.module.css";

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
	children,
	...props
}) => {
	return (
		<label className={label} {...props}>
			{children}
		</label>
	);
};
