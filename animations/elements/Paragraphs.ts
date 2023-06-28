import { Animation } from '../classes/animation'

export default class Paragraphs extends Animation {
	transformPrefix: any
	easing: string
	lines: any
	constructor({ element }: { element: any }) {
		super({
			element,
			elements: {},
		})

		this.onResize()
		console.log(element.innerHTML)
	}

	animateIn() {
		super.animateIn()
	}

	animateOut() {
		super.animateOut()
	}

	onResize() {}
}
