import { Component } from './component'
import { AutoBind } from '../utils/bind'

export class Animation extends Component {
	observer!: IntersectionObserver
	observerOptions: {
		root?: Element | null
		rootMargin?: string
		threshold?: number
	}

	constructor({ element, elements }: { element: string; elements: {} }) {
		// call methods here
		super({ element, elements })
		AutoBind(this)

		this.observerOptions = {
			// rootMargin: "0px 0px -20% 0px",
			threshold: 1,
		}

		this.createObserver()
	}

	createObserver(): void {
		this.observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.animateIn()
				} else {
					this.animateOut()
				}
			})
		}, this.observerOptions)

		this.element && this.observer.observe(this.element)
	}

	animateIn(): void {}
	animateOut(): void {}
}
