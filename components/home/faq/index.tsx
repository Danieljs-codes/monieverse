import { faqs } from '~/utils/mocks'
import s from './faq.module.scss'
import ProjectAccordion from '~/shared/accordion'
import { Link } from '~/shared'

const Faq = () => {
	return (
		<section className={s.faq}>
			<h1 data-animation='paragraphs'>
				Frequently Asked <br /> Questions, <em>Answered</em>
			</h1>

			<div className={s['faq-right']}>
				<ProjectAccordion data={faqs} />
				<div className={s['faq-right-btn']}>
					<p>Still have some questions?</p>
					<Link href='/'>
						Contact Sales
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M14.6925 10.442L8.44254 16.692C8.38447 16.7501 8.31553 16.7962 8.23966 16.8276C8.16379 16.859 8.08247 16.8752 8.00035 16.8752C7.91823 16.8752 7.83691 16.859 7.76104 16.8276C7.68517 16.7962 7.61623 16.7501 7.55816 16.692C7.50009 16.634 7.45403 16.565 7.4226 16.4892C7.39117 16.4133 7.375 16.332 7.375 16.2499C7.375 16.1677 7.39117 16.0864 7.4226 16.0105C7.45403 15.9347 7.50009 15.8657 7.55816 15.8077L13.3668 9.99986L7.55816 4.19205C7.44088 4.07477 7.375 3.91571 7.375 3.74986C7.375 3.58401 7.44088 3.42495 7.55816 3.30767C7.67544 3.1904 7.8345 3.12451 8.00035 3.12451C8.1662 3.12451 8.32526 3.1904 8.44254 3.30767L14.6925 9.55767C14.7506 9.61572 14.7967 9.68465 14.8282 9.76052C14.8597 9.8364 14.8758 9.91772 14.8758 9.99986C14.8758 10.082 14.8597 10.1633 14.8282 10.2392C14.7967 10.3151 14.7506 10.384 14.6925 10.442Z'
								fill='white'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Faq
