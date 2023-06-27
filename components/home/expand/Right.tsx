import s from './expand.module.scss'
import { Aside } from './Aside'
import { useState } from 'react'
import cn from '~/utils/cn'

export const Right = () => {
	const countries = ['eu.svg', 'uk.svg', 'nig.svg', 'usa.svg', 'cn.svg']
	// eslint-disable-next-line no-unused-vars
	const [active, setActive] = useState(2)

	return (
		<div className={s['expand-right']}>
			<div className={s['expand-right-top']}>
				<ul></ul>
				<Aside />
			</div>

			<div className={s['expand-right-bottom']}>
				<ul>
					{countries.map((country, idx) => (
						<li key={idx} className={cn(active === idx && s.active)}>
							<img src={country} alt='' width={28} height={28} />
						</li>
					))}
				</ul>
				<Aside />
			</div>
		</div>
	)
}
