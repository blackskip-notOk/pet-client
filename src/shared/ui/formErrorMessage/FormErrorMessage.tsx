import type { FC, PropsWithChildren } from "react";

export const FormErrorMessage: FC<PropsWithChildren> = ({ children }) => {
	return <p>{children}</p>;
};
