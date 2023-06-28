const map = (array, iterate) => {
	let index = -1
	const length = array == null ? 0 : array.length
	const result = new Array(length)

	while (++index < length) {
		result[index] = iterate(array[index], index, array)
	}
	return result
}

export function mapEach(element, callback) {
	if (element instanceof window.HTMLElement) {
		return [callback(element)]
	}

	return map(element, callback)
}

export const toArray = (nodelist) => Array.from(nodelist)
