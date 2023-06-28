import { Animation } from '../classes/animation'
import gsap from 'gsap'

export default class Paragraphs extends Animation {
	transformPrefix: any
	easing: string
	lines: any
	constructor({ element }: { element: any }) {
		element.innerHTML = `<span>${element.innerHTML}</span>`

		super({
			element,
			elements: {
				inner: 'span',
			},
		})

		this.onResize()
	}

	animateIn() {
		super.animateIn()
		gsap.to(this.elements.inner, {
			y: '0',
			duration: 1.5,
			ease: 'expo.inOut',
			autoAlpha: 1,
		})
	}

	animateOut() {
		super.animateOut()
		gsap.to(this.elements.inner, {
			y: '105%',
			duration: 0.75,
			ease: 'expo.inOut',
			autoAlpha: 0,
		})
	}

	onResize() {}
}
