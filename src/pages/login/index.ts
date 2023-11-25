import { lazy } from "react";

export const LazyLogin = lazy(() => import("./Login").then((module) => ({ default: module.Login })));
