import { Image, Link } from '~/shared'
import s from './hero.module.scss'
import { useMediaQuery } from '@studio-lumio/hooks'

const Hero = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return (
		<div className={s.hero}>
			<Image
				loading='eager'
				priority
				src='/hero/cover.png'
				className={s['hero-bg']}
				width={1440}
				height={900}
				alt=''
			/>

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
