export function sort (arr: [], element: string) {
	const sorted = [...arr].sort((a, b) => a.id - b.id);
	return sorted;
}