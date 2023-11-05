declare module '*.module.css' {
	const classNames: { [key: string]: string }
	export default classNames
}

declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.svg' {
	const content: string
	export default content
}
