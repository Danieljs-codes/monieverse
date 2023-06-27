import s from './expand.module.scss'
import { Center } from './Center'
import { Left } from './Left'

const Expand = () => {
	return (
		<div className={s.expand}>
			<section className={s['expand-top']}>
				<div>move money, seamlessly!</div>
				<h1>
					Expand Payment Horizons{' '}
					<svg
						width='49'
						height='48'
						viewBox='0 0 49 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_3655_53150)'>
							<path
								d='M40.5982 23.5239L19.5982 46.0239C19.3757 46.2614 19.0819 46.4201 18.7613 46.476C18.4407 46.5319 18.1106 46.482 17.8208 46.3338C17.531 46.1856 17.2973 45.9472 17.1549 45.6546C17.0125 45.3619 16.9691 45.0309 17.0314 44.7114L19.7801 30.962L8.97448 26.9045C8.74241 26.8177 8.53546 26.6748 8.37212 26.4885C8.20878 26.3022 8.09413 26.0783 8.03841 25.8369C7.9827 25.5955 7.98766 25.344 8.05284 25.105C8.11803 24.8659 8.24142 24.6468 8.41198 24.467L29.412 1.96704C29.6345 1.72954 29.9283 1.57087 30.2489 1.51497C30.5695 1.45907 30.8996 1.50897 31.1894 1.65714C31.4792 1.80531 31.7129 2.04372 31.8553 2.33638C31.9977 2.62904 32.0411 2.96008 31.9789 3.27954L29.2226 17.0439L40.0282 21.0958C40.2586 21.1832 40.4639 21.326 40.6259 21.5115C40.788 21.6971 40.9019 21.9197 40.9575 22.1597C41.0131 22.3998 41.0087 22.6498 40.9447 22.8877C40.8808 23.1256 40.7592 23.3441 40.5907 23.5239H40.5982Z'
								fill='#FF7D52'
							/>
						</g>
						<defs>
							<clipPath id='clip0_3655_53150'>
								<rect width='48' height='48' fill='white' transform='translate(0.5)' />
							</clipPath>
						</defs>
					</svg>
					Anytime
				</h1>
				<p>
					Set up an account either as an agent or business and complete your profile to
					enable you send and receive money.
				</p>
			</section>

			<div className={s['expand-main']}>
				<Left />
				<Center />
			</div>
		</div>
	)
}

export default Expand
