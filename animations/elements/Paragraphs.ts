import Prefix from '../utils/prefix'

import { Animation } from '../classes/animation'
import { calculate, split } from '../utils/text'
import { toArray } from '../utils/dom'

export default class Paragraphs extends Animation {
	transformPrefix: any
	easing: string
	lines: any
	constructor({ element }: { element: any }) {
		const lines = []
		const paragraphs = element.querySelectorAll('h1, h2, h3, p')

		if (paragraphs.length !== 0) {
			toArray(paragraphs).forEach((element) => {
				split({ element })
				split({ element })

				lines.push(...element.querySelectorAll('span span'))
			})
		} else {
			split({ element })
			split({ element })

			lines.push(...element.querySelectorAll('span span'))
		}

		super({
			element,
			elements: {
				lines,
			},
		})

		this.transformPrefix = Prefix('transform')
		this.easing = 'cubic-bezier(0.19, 1, 0.22, 1)'

		this.onResize()

		if ('IntersectionObserver' in window) {
			toArray(this.lines).forEach((line) => {
				toArray(line).forEach((word) => {
					word.style[this.transformPrefix] = 'translateY(110%)'
				})
			})
		}
	}

	animateIn() {
		super.animateIn()

		toArray(this.lines).forEach((line, lineIndex: number) => {
			toArray(line).forEach((word) => {
				word.style.transition = `transform 1.35s ${lineIndex * 0.13}s ${this.easing}`
				word.style[this.transformPrefix] = 'translateY(0)'
			})
		})
	}

	animateOut() {
		super.animateOut()
	}

	onResize() {
		this.lines = calculate(this.elements.lines)
	}
}
