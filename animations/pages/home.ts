import { Page } from '../classes/page'

export class Home extends Page {
	constructor() {
		super({
			element: '[data-animation="home"]',
			elements: {},
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
	}
}
