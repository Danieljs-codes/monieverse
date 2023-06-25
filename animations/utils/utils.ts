export function getRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}

export function randomNoRepeats(array): any {
	var copy = array.slice(0)
	return function () {
		if (copy.length < 1) {
			copy = array.slice(0)
		}
		const index = Math.floor(Math.random() * copy.length)
		const item = copy[index]
		copy.splice(index, 1)
		return item
	}
}

export const isLocal = window.location.origin.includes('null')

export function isTouch() {
	if ('standalone' in navigator) {
		return true // iOS devices
	}
	const hasCoarse = window.matchMedia('(pointer: coarse)').matches
	if (hasCoarse) {
		return true
	}
	const hasPointer = window.matchMedia('(pointer: fine)').matches
	if (hasPointer) {
		return false // prioritize mouse control
	}

	// Otherwise, fall-back to older style mechanisms.
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export const pageDelay = 1.5
