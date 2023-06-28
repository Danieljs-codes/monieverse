import { Image, Link } from '~/shared'
import s from './hero.module.scss'
import { useMediaQuery } from '@studio-lumio/hooks'

const Hero = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return (
		<div className={s.hero}>
			<div className={s['hero-bg']}>
				<Image
					loading='eager'
					priority
					src='/hero/background.png'
					width={1440}
					height={900}
					alt=''
				/>

				<svg
					width='15'
					height='15'
					viewBox='0 0 15 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.24'
						d='M3.1288 0.115633L8.09681 4.06397L14.3734 3.12862L10.4251 8.09663L11.3604 14.3732L6.39241 10.4249L0.115813 11.3602L4.06415 6.39223L3.1288 0.115633Z'
						fill='#D84E04'
					/>
				</svg>
				<svg
					width='19'
					height='20'
					viewBox='0 0 19 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.2'
						d='M4.1656 0.834218L10.553 5.91066L18.6229 4.70805L13.5465 11.0955L14.7491 19.1654L8.36167 14.089L0.291759 15.2916L5.3682 8.90413L4.1656 0.834218Z'
						fill='#47389E'
					/>
				</svg>
				<svg
					width='10'
					height='10'
					viewBox='0 0 10 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.24'
						d='M2.79888 0.412109L5.81652 2.81038L9.629 2.24224L7.23073 5.25987L7.79888 9.07236L4.78124 6.67409L0.96875 7.24224L3.36703 4.2246L2.79888 0.412109Z'
						fill='#47389E'
					/>
				</svg>

				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.24'
						d='M9.567 0.185282L8.85399 4.96985L11.8638 8.7569L7.07919 8.04389L3.29214 11.0537L4.00515 6.26909L0.995383 2.48204L5.77995 3.19505L9.567 0.185282Z'
						fill='#D84E04'
					/>
				</svg>
				<svg
					width='14'
					height='14'
					viewBox='0 0 14 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.24'
						d='M10.4854 0.889168L9.68366 6.26911L13.068 10.5274L7.68802 9.72567L3.42972 13.11L4.23145 7.73002L0.847161 3.47173L6.2271 4.27346L10.4854 0.889168Z'
						fill='#47389E'
					/>
				</svg>
			</div>

			<section className={s['hero-top']}>
				<h1>Move money globally</h1>
				<p>
					Receive and make payments to vendors from across the globe. With multi-currency
					accounts, you can send and receive from China, UK, Nigeria and more at low-fees.
				</p>
				<div className={s['hero-top-btn']}>
					<Link href='/'>Create a free account</Link>
					<Link href='/'>Contact sales</Link>
				</div>

				<div className={s['hero-cards']}>
					<Image
						data-speed={isMobile ? 1.05 : 0.9}
						loading='eager'
						priority
						src='/hero/1.svg'
						width={320}
						height={202}
						alt=''
					/>

					<div>
						<Image
							loading='eager'
							priority
							data-speed={isMobile ? 1.1 : 1.2}
							src='/hero/2.svg'
							width={360}
							height={72}
							alt=''
						/>
						<Image
							loading='eager'
							priority
							data-speed={isMobile ? 1.11 : 1.24}
							src='/hero/3.svg'
							width={360}
							height={72}
							alt=''
						/>
					</div>
				</div>
			</section>

			{!isMobile && (
				<Image
					className={s['hero-gb']}
					src='/hero/gb.png'
					width={1440}
					height={315}
					alt=''
				/>
			)}
		</div>
	)
}

export default Hero
