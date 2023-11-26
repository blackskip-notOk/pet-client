import { lazy } from "react";

export const LazyLoginPage = lazy(() =>
	import("./LoginPage").then((module) => ({ default: module.LoginPage })),
);
