import gsap from 'gsap'
import { Component } from '../classes/component'

export class Nav extends Component {
	lastScrollTop: number
	mm: gsap.MatchMedia
	constructor() {
		super({
			element: 'body',
			elements: {
				header: '[data-animation="header"]',
				nav: '[data-animation="nav"]',
				navItem: '[data-animation="nav-item"]',
				navMain: '[data-animation="nav-main"]',
				navToggle: '[data-animation="nav-toggle"]',
				navToggleOne: '[data-animation="nav-toggle-one"]',
				navToggleTwo: '[data-animation="nav-toggle-two"]',
				navToggleThree: '[data-animation="nav-toggle-three"]',
			},
		})

		this.lastScrollTop = 0

		this.mm = gsap.matchMedia()

		this.mm.add('(max-width: 768px)', () => {
			this.toggle()
		})
	}

	onScroll() {
		const duration = 0.3
		const delay = 0.15
		const ease = 'linear'
		let st = window.scrollY || document.documentElement.scrollTop

		if (st > this.lastScrollTop && window.scrollY > 100) {
			gsap.to(this.elements.header, {
				y: '-200px',
				scaleX: 1.1,
				duration,
				ease,
				delay,
			})
		} else if (st < this.lastScrollTop) {
			gsap.to(this.elements.header, {
				y: '0',
				scaleX: 1,
				duration,
				ease,
			})
		}
		this.lastScrollTop = st <= 0 ? 0 : st
	}

	toggle() {
		const { navMain, navItem, navToggle, navToggleOne, navToggleTwo, navToggleThree } =
			this.elements

		const d1 = ['M 2 2.5 L 20 2.5', 'M 3 16.5 L 17 2.5']
		const d2 = ['M 2 16.346 L 20 16.346', 'M 3 2.5 L 17 16.346']
		const svgDur = 0.5

		let isRev = false
		const tVar = { paused: true, defaults: { duration: 0.8, ease: 'expo.inOut' } }

		/**Reset */
		gsap
			.timeline()
			.set(navMain, {
				opacity: 0,
				scale: 0.95,
				pointerEvents: 'none',
			})
			.set(navItem, {
				opacity: 0,
				y: '100%',
			})
			.set(navToggleOne, {
				attr: {
					d: d1[0],
				},
			})
			.set(navToggleTwo, {
				scaleX: 1,
				transformOrigin: '100% 100%',
			})
			.set(navToggleThree, {
				attr: {
					d: d2[0],
				},
			})

		/**Play */
		const togglePl = gsap
			.timeline(tVar)
			.call(() => {
				isRev = true
			})
			.to(navMain, {
				opacity: 1,
				scale: 1,
				pointerEvents: 'all',
			})
			.to(
				navItem,
				{
					opacity: 1,
					y: 0,
					stagger: 0.05,
					duration: 1.1,
				},
				0
			)
			.to(
				navToggleOne,
				{
					attr: {
						d: d1[1],
						duration: svgDur,
					},
				},
				0.05
			)
			.to(
				navToggleTwo,
				{
					scaleX: 0,
					duration: svgDur,
				},
				0
			)
			.to(
				navToggleThree,
				{
					attr: {
						d: d2[1],
						duration: svgDur,
					},
				},
				0.05
			)

		/**reverse */
		const toggleRv = gsap
			.timeline(tVar)
			.call(() => {
				isRev = false
			})
			.to(navItem, {
				opacity: 0,
				y: '100%',
				stagger: 0.05,
				duration: 1.1,
			})
			.to(
				navMain,
				{
					opacity: 0,
					scale: 0.95,
					pointerEvents: 'none',
				},
				0.5
			)
			.to(
				navToggleOne,
				{
					attr: {
						d: d1[0],
						duration: svgDur,
					},
				},
				0
			)
			.to(
				navToggleTwo,
				{
					scaleX: 1,
					duration: svgDur,
				},
				0.15
			)
			.to(
				navToggleThree,
				{
					attr: {
						d: d2[0],
						duration: svgDur,
					},
				},
				0
			)
		navToggle.addEventListener('click', () => {
			!isRev ? togglePl.restart().play() : toggleRv.restart().play()
		})
	}

	create() {
		super.create()
	}

	addEventListeners(): void {
		super.addEventListeners()
		window.addEventListener('scroll', this.onScroll)
	}
}
