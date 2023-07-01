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
				/**Global */
				global: '[data-animation="global"]',
				globalContainer: '[data-animation="global-container"]',
				globalHeader: '[data-animation="global-header"]',
				globalDiv: '[data-animation="global-div"]',

				globalPath: '[data-animation="global-path"]',
				globalPathEl: '[data-animation="global-path-el"]',
				globalPathNum: '[data-animation="global-path-num"]',
				globalMediaItem: '[data-animation="global-media-item"]',

				/**Create */
				create: '[data-animation="create"]',
				createSection: '[data-animation="create-section"]',
				createImage: '[data-animation="create-image"]',

				/**Expand */
				expandCountries: '[data-animation="expand-countries"]',
				expandCountriesItem: '[data-animation="expand-countries-item"]',
			},
		})

		this.mm = gsap.matchMedia()
	}

	animateCreate() {
		const { createSection, createImage } = this.elements
		const arr: HTMLDivElement[] = toArray(createSection)
		const images: HTMLDivElement[] = toArray(createImage)

		arr.forEach((el, index) => {
			images.filter((img, idx) => {
				if (idx === index) {
					gsap.to(img, {
						scrollTrigger: {
							id: 'first',
							trigger: el,
							start: 'top 80%',
							toggleActions: 'play none none reverse',
						},
						y: 0,
						duration: 0.4,
						force3D: true,
						immediateRender: false,
					})

					gsap.to(img, {
						scrollTrigger: {
							trigger: el,
							id: 'two',
							start: 'top -20%',
							toggleActions: 'play none none reverse',
						},
						y: '41rem',
						duration: 0.4,
						force3D: true,
						immediateRender: false,
					})
				}
			})
		})
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
				willChange: 'transform',
			})
			.set(globalDiv, {
				height: (idx) => idx != 0 && 0,
				willChange: 'height',
			})
			.set(globalHeader, {
				color: (idx) => idx != 0 && '#49576D',
				willChange: 'color',
			})
			.set(globalMediaItem, {
				x: (idx) => idx != 0 && '-100%',
				willChange: 'transform',
				// scale: (idx) => idx != 0 && '0.75',
			})

		const timeline = gsap.timeline({
			defaults: { ease: 'none' },
			scrollTrigger: {
				trigger: globalContainer,
				invalidateOnRefresh: true,
				markers: isLocal,
				pin: true,
				scrub: true,
				end: () => '+=' + globalContainer.offsetWidth * 2,
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
						x: 0,
						scale: 1,
					},
					`this-${idx}`
				)
		})
	}

	animateExpand() {
		const { expandCountries, expandCountriesItem } = this.elements
		const wrap = gsap.utils.wrap(0, expandCountries.clientWidth / 2)
		const countries: HTMLLIElement[] = toArray(expandCountriesItem)

		/**Right */
		gsap.to(countries, {
			delay: 1,
			duration: 1,
			x: () => `-=${countries[0].clientWidth}`,
			modifiers: {
				x: gsap.utils.unitize(wrap),
			},
			repeat: -1,
			repeatDelay: 1,
			repeatRefresh: true,
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
		this.animateCreate()
		this.animateExpand()
		this.mm.add('(min-width: 992px)', () => {
			this.animateGlobal()
		})
	}
}
