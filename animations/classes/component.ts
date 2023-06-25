import { AutoBind } from '../utils/bind'
import { EventEmitter } from '../utils/event'

export class Component extends EventEmitter {
	element!: HTMLElement | any
	elements: any
	selector: any
	selectorChildren: {}

	constructor({ element, elements }: { element: string; elements?: {} }) {
		super()
		AutoBind(this)

		this.selector = element
		this.selectorChildren = {
			...elements,
		}

		this.create()
		this.addEventListeners()
		this.onResize()
	}

	create() {
		if (this.selector instanceof window.HTMLElement) {
			this.element = this.selector
		} else {
			this.element = document.querySelector(this.selector)
		}
		this.elements = {}

		Object.keys(this.selectorChildren).forEach((key) => {
			const entry = this.selectorChildren[key]

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

	addEventListeners() {
		window.addEventListener('resize', this.onResize, { passive: true })
	}

	removeEventListeners() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize() {}
}
