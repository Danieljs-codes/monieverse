import gsap from 'gsap'
import { Component } from '../classes/component'
import { isLocal } from '~/utils'

export class Global extends Component {
	mm: gsap.MatchMedia
	constructor() {
		super({
			element: '[data-animation="global"]',
			elements: {
				container: '[data-animation="global-container"]',
				content: '[data-animation="global-container"]',
				list: '[data-animation="global-list"]',
				div: '[data-animation="global-div"]',
			},
		})

		this.mm = gsap.matchMedia()

		this.mm.add('(max-width: 768px)', () => {})
		this.animateList()
	}

	animateList() {
		// eslint-disable-next-line no-unused-vars
		const { container, content, list, div } = this.elements

		gsap.set(div, {
			height: (idx) => idx != 0 && 0,
		})

		gsap
			.timeline({
				defaults: { ease: 'none' },
				scrollTrigger: {
					trigger: container,
					invalidateOnRefresh: true,
					markers: isLocal,
					pin: true,
					scrub: true,
					end: () => '+=' + container.offsetWidth * 1.4,
				},
			})
			.to(
				div[0],
				{
					height: 0,
					paddingTop: 0,
					paddingBottom: 0,
				},
				'first'
			)
			.to(
				div[1],
				{
					height: 'auto',
				},
				'first'
			)
			.to(
				div[1],
				{
					height: 0,
				},
				'second'
			)
			.to(
				div[2],
				{
					height: 'auto',
				},
				'second'
			)
			.to(
				div[2],
				{
					height: 0,
				},
				'third'
			)
			.to(
				div[3],
				{
					height: 'auto',
				},
				'third'
			)
	}

	create() {
		super.create()
	}

	addEventListeners(): void {
		super.addEventListeners()
	}
}
