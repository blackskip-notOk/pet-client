import { lazy } from "react";

export const LazyExamples = lazy(() => import("./Examples").then((module) => ({ default: module.Examples })));
