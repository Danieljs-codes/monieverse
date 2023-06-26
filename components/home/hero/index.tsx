import { Link } from '~/shared'
import s from './hero.module.scss'

const Hero = () => {
	return (
		<div className={s.hero}>
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
			</section>
		</div>
	)
}

export default Hero
