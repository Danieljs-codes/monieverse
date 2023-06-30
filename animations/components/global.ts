import gsap from 'gsap'
import { Component } from '../classes/component'
import { isLocal } from '~/utils'
import { toArray } from '../utils/dom'

export class Global extends Component {
	mm: gsap.MatchMedia
	constructor() {
		super({
			element: '[data-animation="global"]',
			elements: {
				container: '[data-animation="global-container"]',
				content: '[data-animation="global-container"]',
				header: '[data-animation="global-header"]',
				div: '[data-animation="global-div"]',

				path: '[data-animation="global-path"]',
				pathEl: '[data-animation="global-path-el"]',
				pathNum: '[data-animation="global-path-num"]',
				mediaItem: '[data-animation="global-media-item"]',
			},
		})

		this.mm = gsap.matchMedia()

		this.mm.add('(min-width: 992px)', () => {
			this.animateList()
		})
	}

	animateList() {
		const { container, header, div, path, pathEl, pathNum, mediaItem } = this.elements

		const pth =
			path[0].getBoundingClientRect().width / 2 - pathNum[0].getBoundingClientRect().width

		gsap
			.timeline()
			.set(pathEl, {
				x: `-${pth}`,
			})
			.set(div, {
				height: (idx) => idx != 0 && 0,
			})
			.set(header, {
				color: (idx) => idx != 0 && '#49576D',
			})

		const timeline = gsap.timeline({
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

		gsap
			.timeline({
				defaults: { ease: 'none' },
				scrollTrigger: {
					trigger: container,
					invalidateOnRefresh: true,
					scrub: true,
				},
			})
			.to(pathEl[0], {
				x: pth,
			})

		toArray(div).forEach((_, idx) => {
			if (idx > div.length - 1) return null
			if (idx == div.length - 1) return null
			timeline
				.to(
					div[idx],
					{
						height: 0,
					},
					`this-${idx}`
				)
				.to(
					div[idx + 1],
					{
						height: 'auto',
					},
					`this-${idx}`
				)
				.to(
					header[idx],
					{
						color: '#49576D',
					},
					`this-${idx}`
				)
				.to(
					header[idx + 1],
					{
						color: 'var(--h-color)',
					},
					`this-${idx}`
				)
				.to(
					pathEl[idx + 1],
					{
						x: pth,
					},
					`this-${idx}`
				)
				// .to(
				// 	mediaItem[idx],
				// 	{
				// 		y: '-100%',
				// 	},
				// 	`this-${idx}`
				// )
				.to(
					mediaItem[idx + 1],
					{
						y: 0,
					},
					`this-${idx}`
				)
		})
	}

	create() {
		super.create()
	}

	addEventListeners(): void {
		super.addEventListeners()
	}
}
