import { lazy } from "react";

export const LazyTodo = lazy(() => import("./Todo").then((module) => ({ default: module.Todo })));
