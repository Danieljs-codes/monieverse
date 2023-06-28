import { generateKey } from '~/utils'
import s from './expand.module.scss'
import { Shield } from './Shield'
import { Aside } from './Aside'
import { Marquee } from '~/shared'

export const Center = () => {
	const sec2 = ['/payment/1.svg', '/payment/2.svg', '/payment/3.svg', '/payment/4.svg']
	return (
		<div className={s['expand-center']}>
			<div className={s['expand-center-top']}>
				<Marquee duration={20} inverted={false}>
					<ul>
						{sec2.map((item, idx) => (
							<li key={generateKey(idx, item)} className={s['expand-center-li']}>
								<img src={item} alt='' width={300} height={118} />
							</li>
						))}
					</ul>
				</Marquee>

				<Aside />
			</div>
			<Shield />
		</div>
	)
}
