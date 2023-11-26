import { type InputHTMLAttributes, forwardRef } from "react";
import { input } from "./index.module.css";

export const Input = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement>
>(function Input(props, ref) {
	return <input className={input} ref={ref} {...props} />;
});
