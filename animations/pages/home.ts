import { Page } from '../classes/page'
import gsap from 'gsap'
import { isLocal } from '~/utils'
import { toArray } from '../utils/dom'

export class Home extends Page {
	mm: gsap.MatchMedia
	constructor() {
		super({
			element: '[data-page="home"]',
			elements: {
				global: '[data-animation="global"]',
				globalContainer: '[data-animation="global-container"]',
				globalHeader: '[data-animation="global-header"]',
				globalDiv: '[data-animation="global-div"]',

				globalPath: '[data-animation="global-path"]',
				globalPathEl: '[data-animation="global-path-el"]',
				globalPathNum: '[data-animation="global-path-num"]',
				globalMediaItem: '[data-animation="global-media-item"]',
			},
		})

		this.mm = gsap.matchMedia()
	}

	animateGlobal() {
		const {
			globalContainer,
			globalHeader,
			globalDiv,
			globalPath,
			globalPathEl,
			globalPathNum,
			globalMediaItem,
		} = this.elements

		const pth =
			globalPath[0].getBoundingClientRect().width / 2 -
			globalPathNum[0].getBoundingClientRect().width

		gsap
			.timeline()
			.set(globalPathEl, {
				x: `-${pth}`,
			})
			.set(globalDiv, {
				height: (idx) => idx != 0 && 0,
			})
			.set(globalHeader, {
				color: (idx) => idx != 0 && '#49576D',
			})

		const timeline = gsap.timeline({
			defaults: { ease: 'none' },
			scrollTrigger: {
				trigger: globalContainer,
				invalidateOnRefresh: true,
				markers: isLocal,
				pin: true,
				scrub: true,
				end: () => '+=' + globalContainer.offsetWidth * 1.4,
			},
		})

		gsap
			.timeline({
				defaults: { ease: 'none' },
				scrollTrigger: {
					trigger: globalContainer,
					invalidateOnRefresh: true,
					scrub: true,
				},
			})
			.to(globalPathEl[0], {
				x: pth,
			})

		toArray(globalDiv).forEach((_, idx) => {
			if (idx > globalDiv.length - 1) return null
			if (idx == globalDiv.length - 1) return null
			timeline
				.to(
					globalDiv[idx],
					{
						height: 0,
					},
					`this-${idx}`
				)
				.to(
					globalDiv[idx + 1],
					{
						height: 'auto',
					},
					`this-${idx}`
				)
				.to(
					globalHeader[idx],
					{
						color: '#49576D',
					},
					`this-${idx}`
				)
				.to(
					globalHeader[idx + 1],
					{
						color: 'var(--h-color)',
					},
					`this-${idx}`
				)
				.to(
					globalPathEl[idx + 1],
					{
						x: pth,
					},
					`this-${idx}`
				)
				.to(
					globalMediaItem[idx + 1],
					{
						y: 0,
					},
					`this-${idx}`
				)
		})
	}

	create(): void {
		super.create()
	}

	reset(): void {
		super.reset()
	}

	show(): void {
		super.show()
		this.mm.add('(min-width: 992px)', () => {
			this.animateGlobal()
		})
	}
}
