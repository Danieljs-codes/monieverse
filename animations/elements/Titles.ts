import { Animation } from '../classes/animation'
import gsap from 'gsap'

export default class TItles extends Animation {
	constructor({ element }: { element: any }) {
		super({
			element,
			elements: {
				span: 'span',
			},
		})

		gsap.set(this.elements.span, {
			y: '100%',
		})
	}

	animateIn() {
		super.animateIn()

		gsap.to(this.elements.span, {
			y: 0,
			ease: 'expo.inOut',
			duration: 1.5,
		})
	}

	animateOut() {
		super.animateOut()
		gsap.to(this.elements.span, {
			y: '100%',
		})
	}

	onResize() {}
}
