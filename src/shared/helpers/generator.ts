function* generator(): Generator<number> {
	let index = 0;
	while (true) {
		yield index++;
	}
}

export const indexGenerator = generator();
