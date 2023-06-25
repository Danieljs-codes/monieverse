/* eslint-disable no-unused-vars */
import { EventEmitter } from '../utils/event'
import { AutoBind } from '../utils/bind'

export class Page extends EventEmitter {
	components: any
	elements: any
	selectors: { element: any; elements: any }
	element: any

	constructor({ element, elements }: any) {
		super()
		AutoBind(this)

		this.selectors = {
			element,
			elements: {
				...elements,
			},
		}
	}

	create(): void {
		this.element = document.querySelector(this.selectors.element)
		this.elements = {}

		Object.keys(this.selectors.elements).forEach((key) => {
			const entry = this.selectors.elements[key]

			if (
				entry instanceof HTMLElement ||
				entry instanceof NodeList ||
				Array.isArray(entry)
			) {
				this.elements[key] = entry
			} else {
				this.elements[key] = this.element.querySelectorAll(entry)

				if (this.elements[key].length === 0) {
					this.elements[key] = null
				} else if (this.elements[key].length === 1) {
					this.elements[key] = this.element.querySelector(entry)
				}
			}
		})
	}

	show() {}

	reset() {}

	/**
	 * Events
	 */
	onResize() {}

	onWheel(event: any) {}

	onTouchDown(event: any) {}

	onTouchMove(event: any) {}

	onTouchUp(event: any) {}

	update() {}
}
