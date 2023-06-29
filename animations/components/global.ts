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
			},
		})

		this.mm = gsap.matchMedia()

		this.mm.add('(max-width: 768px)', () => {})
		this.animateList()
	}

	animateList() {
		const { container, header, div, path, pathEl } = this.elements

		const pth = path[0].getBoundingClientRect().width / 2 - 20

		gsap.set(pathEl, {
			x: `-${pth}`,
		})
		gsap.set(div, {
			height: (idx) => idx != 0 && 0,
		})
		gsap.set(header, {
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

		toArray(div).forEach((element, idx) => {
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
		})

		// timeline
		// 	.to(
		// 		div[1],
		// 		{
		// 			height: 0,
		// 		},
		// 		'second'
		// 	)
		// 	.to(
		// 		div[2],
		// 		{
		// 			height: 'auto',
		// 		},
		// 		'second'
		// 	)
		// 	.to(
		// 		header[1],
		// 		{
		// 			color: '#49576D',
		// 		},
		// 		'second'
		// 	)
		// 	.to(
		// 		header[2],
		// 		{
		// 			color: '#FF7D52',
		// 		},
		// 		'second'
		// 	)
		// 	.to(
		// 		pathEl[2],
		// 		{
		// 			x: pth,
		// 		},
		// 		'second'
		// 	)

		// timeline
		// 	.to(
		// 		div[2],
		// 		{
		// 			height: 0,
		// 		},
		// 		'third'
		// 	)
		// 	.to(
		// 		div[3],
		// 		{
		// 			height: 'auto',
		// 		},
		// 		'third'
		// 	)
		// 	.to(
		// 		header[2],
		// 		{
		// 			color: '#49576D',
		// 		},
		// 		'third'
		// 	)
		// 	.to(
		// 		header[3],
		// 		{
		// 			color: '#0BA5EC',
		// 		},
		// 		'third'
		// 	)
		// 	.to(
		// 		pathEl[3],
		// 		{
		// 			x: pth,
		// 		},
		// 		'third'
		// 	)
	}

	create() {
		super.create()
	}

	addEventListeners(): void {
		super.addEventListeners()
	}
}
