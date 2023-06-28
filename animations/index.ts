import { AutoBind } from './utils/bind'
import { mapEach } from './utils/dom'

import { Home } from './pages/home'
import { Terms } from './pages/terms'

import Paragraphs from './elements/Paragraphs'
import Titles from './elements/Titles'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Nav } from './components/nav'
gsap.registerPlugin(ScrollTrigger)

export class App {
	currentpage: any
	pages: any
	pagetitle: string
	frame: any
	lenis: any

	animations: any[]
	animationsSpeed: any
	animationsParagraphs: any
	animationsTitles: any
	nav: Nav

	constructor({ page }: { page: string }) {
		AutoBind(this)
		this.pagetitle = page

		this.animations = []
		this.createPages()
		this.update()
		this.reset()
		this.onResize()
	}

	async reset() {
		await this.currentpage.reset()
		this.currentpage.show()
	}

	createComponents(): void {
		this.createAnimations()
		this.nav = new Nav()
	}

	createAnimations(): void {
		// Speed
		this.animationsSpeed = mapEach(
			document.querySelectorAll('[data-speed]'),
			(element) => {
				gsap.to(element, {
					y: (i, el) =>
						(1 - parseFloat(el.getAttribute('data-speed'))) *
						ScrollTrigger.maxScroll(window),
					ease: 'none',
					scrollTrigger: {
						start: 0,
						end: 'max',
						invalidateOnRefresh: true,
						scrub: 1,
					},
				})
			}
		)
		this.animations.push(...this.animationsSpeed)

		// Paragraph.
		this.animationsParagraphs = mapEach(
			document.querySelectorAll('[data-animation="paragraphs"]'),
			(element) => new Paragraphs({ element })
		)
		this.animations.push(...this.animationsParagraphs)

		// Title.
		this.animationsTitles = mapEach(
			document.querySelectorAll('[data-animation="titles"]'),
			(element) => new Titles({ element })
		)
		this.animations.push(...this.animationsParagraphs)
	}

	createPages() {
		this.pages = {
			home: new Home(),
			terms: new Terms(),
		}
		this.currentpage = this.pages[this.pagetitle]
		this.currentpage.create()
		this.currentpage.reset()
		this.addEventListeners()
		this.createComponents()
	}

	/**
	 * Loop
	 **/
	update() {
		if (this.currentpage && this.currentpage.update) {
			this.currentpage.update()
		}

		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	onResize() {
		// window.location.reload()
		if (this.currentpage && this.currentpage.onResize) {
			this.currentpage.onResize()
		}
	}

	onWheel(event: any) {
		if (this.currentpage) {
			this.currentpage.onWheel(event)
		}
	}

	onTouchDown(event: any) {
		event.stopPropagation()

		if (this.currentpage) {
			this.currentpage.onTouchDown(event)
		}
	}

	onTouchMove(event: any) {
		event.stopPropagation()

		if (this.currentpage) {
			this.currentpage.onTouchMove(event)
		}
	}

	onTouchUp(event: any) {
		event.stopPropagation()

		if (this.currentpage) {
			this.currentpage.onTouchUp(event)
		}
	}

	addEventListeners() {
		window.addEventListener('resize', this.onResize, { passive: true })

		window.addEventListener('mousewheel', this.onWheel, { passive: true })
		window.addEventListener('wheel', this.onWheel, { passive: true })

		window.addEventListener('mousedown', this.onTouchDown, { passive: true })
		window.addEventListener('mousemove', this.onTouchMove, { passive: true })
		window.addEventListener('mouseup', this.onTouchUp, { passive: true })

		window.addEventListener('touchstart', this.onTouchDown, { passive: true })
		window.addEventListener('touchmove', this.onTouchMove, { passive: true })
		window.addEventListener('touchend', this.onTouchUp, { passive: true })
	}
}

console.log(
	'%c 💛 & 💡 Josiah — https://jobenetuk.dev/',
	'background: #000; color: #ff873c;'
)
