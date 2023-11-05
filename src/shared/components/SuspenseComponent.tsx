import type { FC, LazyExoticComponent } from 'react'
import { Suspense } from 'react'

type SuspenseComponentProps = { LazyComponent: LazyExoticComponent<FC> };

export const SuspenseComponent: FC<SuspenseComponentProps> = ({ LazyComponent }) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyComponent />
		</Suspense>
	)
}
