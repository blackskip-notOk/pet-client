import { useRouteError } from "react-router-dom";

import { isErrorWithMessage } from "~shared/helpers";

export const NotFound = () => {
	const error = useRouteError();

	return (
		<section>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{isErrorWithMessage(error) && (error.statusText || error.message)}</i>
			</p>
		</section>
	);
};
