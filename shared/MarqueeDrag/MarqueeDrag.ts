import NormalizeWheel from 'normalize-wheel'
import { Component } from '~/animations/classes/component'

import { getOffset, toArray } from '~/animations/utils/dom'
import { lerp } from '~/animations/utils/math'
import Prefix from '~/animations/utils/prefix'

export class MarqueeDrag extends Component {
	transformPrefix: any
	scroll: {
		ease: number
		position: number
		current: number
		target: number
		last: number
	}
	length: any
	width: any
	widthTotal: any
	velocity: number
	isEnabled!: boolean
	isDown!: boolean
	start: any
	direction!: string
	rotation!: number
	frame: number
	multiplier: number
	constructor({
		element,
		elements,
		multiplier = 0.7,
	}: {
		element: any
		elements: any
		multiplier?: number
	}) {
		super({
			element,
			elements,
		})
		this.multiplier = multiplier

		this.transformPrefix = Prefix('transform')
		toArray(this.elements.items).forEach((element) => {
			element.style.cursor = 'grab'
		})

		this.scroll = {
			ease: 0.1,
			position: 0,
			current: 0,
			target: 0,
			last: 0,
		}

		toArray(this.elements.items).forEach((element) => {
			const offset = getOffset(element)

			element.extra = 0
			element.width = offset.width
			element.offset = offset.left
			element.position = 0
		})

		this.length = this.elements.items.length

		this.width = this.elements.items[0].width
		this.widthTotal = getOffset(this.element).width

		this.velocity = 2

		this.addEventListeners()
		this.enable()

		// new window.IntersectionObserver(
		//   entries => {
		//     entries.forEach(entry => {
		//       if (entry.isIntersecting) {
		//         this.enable()
		//       } else {
		//         this.disable()
		//       }
		//     })
		//   },
		//   { threshold: 0 }
		// ).observe(this.element)
	}

	enable() {
		this.isEnabled = true

		this.update()
	}

	disable() {
		this.isEnabled = false
	}

	onTouchDown(event: MouseEvent | any) {
		if (!this.isEnabled) return
		toArray(this.elements.items).forEach((element) => {
			element.style.cursor = 'grabbing'
		})

		this.isDown = true

		this.scroll.position = this.scroll.current
		this.start = event.touches ? event.touches[0].clientX : event.clientX
	}

	onTouchMove(event: MouseEvent | any) {
		if (!this.isDown || !this.isEnabled) return

		const x = event.touches ? event.touches[0].clientX : event.clientX
		const distance = (this.start - x) * 7

		this.scroll.target = this.scroll.position + distance
	}

	onTouchUp() {
		if (!this.isEnabled) return

		this.isDown = false
		toArray(this.elements.items).forEach((element) => {
			element.style.cursor = 'grab'
		})
	}

	onWheel(event: any) {
		if (!this.isEnabled) return
		const normalized = NormalizeWheel(event)
		const speed = normalized.pixelY * this.multiplier

		this.scroll.target += speed
	}

	transform(element: { style: { [x: string]: string } }, x: number) {
		element.style[this.transformPrefix] = `translate3d(${Math.floor(x)}px, 0, 0)`
	}

	onResize() {
		toArray(this.elements.items).forEach((element) => {
			this.transform(element, 0)

			const offset = getOffset(element)

			element.extra = 0
			element.width = offset.width
			element.offset = offset.left
			element.position = 0
		})

		this.width = getOffset(this.elements.items[0]).width
		this.widthTotal = getOffset(this.element).width

		this.scroll = {
			ease: 0.1,
			position: 0,
			current: 0,
			target: 0,
			last: 0,
		}
	}

	update() {
		if (!this.isEnabled) return

		this.scroll.target += this.velocity

		this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)

		if (this.scroll.current < this.scroll.last) {
			this.direction = 'down'
			this.velocity = -2
		} else {
			this.direction = 'up'
			this.velocity = 2
		}

		toArray(this.elements.items).forEach((element) => {
			element.position = -this.scroll.current - element.extra

			const offset = element.position + element.offset + element.width + 30

			element.isBefore = offset < 0
			element.isAfter = offset > this.widthTotal

			if (this.direction === 'up' && element.isBefore) {
				element.extra = element.extra - this.widthTotal

				element.isBefore = false
				element.isAfter = false
			}

			if (this.direction === 'down' && element.isAfter) {
				element.extra = element.extra + this.widthTotal

				element.isBefore = false
				element.isAfter = false
			}

			this.transform(element, element.position)
		})

		this.scroll.last = this.scroll.current
		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	addEventListeners() {
		window.addEventListener('resize', this.onResize, { passive: true })

		window.addEventListener('mousewheel', this.onWheel, { passive: true })
		window.addEventListener('wheel', this.onWheel, { passive: true })

		this.element.addEventListener('mousedown', this.onTouchDown, { passive: true })
		this.element.addEventListener('mousemove', this.onTouchMove, { passive: true })
		this.element.addEventListener('mouseup', this.onTouchUp, { passive: true })

		this.element.addEventListener('touchstart', this.onTouchDown, { passive: true })
		this.element.addEventListener('touchmove', this.onTouchMove, { passive: true })
		this.element.addEventListener('touchend', this.onTouchUp, { passive: true })
	}
}
