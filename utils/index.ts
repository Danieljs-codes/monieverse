export const capitalize = (s: string) =>
	s.toLocaleLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())

export const generateKey = (index: number, id: string) => {
	return `${index}-${id}`
}

export const ObjectHasData = (obj: Object | null) => Object.values(obj || {}).length > 0

export const isHash = (href: string) => href?.indexOf('#') != -1
export const isProtocol = (href: string) =>
	href?.startsWith('mailto:') || href?.startsWith('tel:')
export const isExternal = (href: string) => href?.startsWith('http')

export const scrollOptions = {
	duration: 1.3,
	easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	orientation: 'vertical',
	gestureOrientation: 'vertical',
	smoothWheel: true,
	wheelMultiplier: 0.5,
	touchMultiplier: 1,
	smoothTouch: false,
	infinite: false,
}

export function reverseSlug(slug: string) {
	const words = slug?.split('-')
	for (let i = 0; i < words?.length; i++) {
		const word = words[i]
		words[i] = word.charAt(0).toUpperCase() + word.slice(1)
	}

	return words?.join(' ')
}

export const slugify = (title: string) => {
	if (title) {
		return title
			.toLowerCase()
			.replace(/[^\w ]+/g, '')
			.replace(/ +/g, '-')
	}
}

export function chunkify(a: string | any[], n: number, balanced: any) {
	if (n < 2) return [a]

	var len = a.length,
		out = [],
		i = 0,
		size: number

	if (len % n === 0) {
		size = Math.floor(len / n)
		while (i < len) {
			out.push(a.slice(i, (i += size)))
		}
	} else if (balanced) {
		while (i < len) {
			size = Math.ceil((len - i) / n--)
			out.push(a.slice(i, (i += size)))
		}
	} else {
		n--
		size = Math.floor(len / n)
		if (len % size === 0) size--
		while (i < size * n) {
			out.push(a.slice(i, (i += size)))
		}
		out.push(a.slice(size * n))
	}

	return out
}

export function replaceText(inputText) {
	// eslint-disable-next-line no-useless-escape
	const pattern = /\hello@monieverse.com\b/g
	const replacedText = inputText.replace(
		pattern,
		'<a href="mailto:hello@monieverse.com" target="_blank" rel="noreferrer noopenner" >hello@monieverse.com</a>'
	)

	return replacedText
}

export const isLocal = process.env.NODE_ENV === 'development'
