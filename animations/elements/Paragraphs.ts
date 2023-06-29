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

		gsap.set(this.elements.inner, {
			y: '105%',
			rotate: '5deg',
			ease: 'expo.inOut',
			autoAlpha: 0,
		})
		this.onResize()
	}

	animateIn() {
		super.animateIn()
		gsap.to(this.elements.inner, {
			y: '0',
			rotate: '0',
			duration: 1.35,
			ease: 'expo.inOut',
			autoAlpha: 1,
		})
	}

	animateOut() {
		super.animateOut()
	}

	onResize() {}
}
