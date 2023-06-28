import s from './expand.module.scss'
import { Aside } from './Aside'
import { useEffect, useMemo, useRef, useState } from 'react'
import cn from '~/utils/cn'
import gsap from 'gsap'

export const Right = () => {
	const countries = useMemo(
		() => ['eu.svg', 'uk.svg', 'nig.svg', 'usa.svg', 'cn.svg'],
		[]
	)

	const [active, setActive] = useState(2)
	const ref = useRef<HTMLUListElement>(null)

	useEffect(() => {
		const wrap = gsap.utils.wrap(0, ref.current.clientWidth / 2)
		const arr: HTMLLIElement[] = gsap.utils.toArray('[data-animation="countries"]')

		gsap.to(arr, {
			delay: 1,
			duration: 1,
			x: () => `-=${arr[0].clientWidth}`,
			modifiers: {
				x: gsap.utils.unitize(wrap),
			},
			repeat: -1,
			repeatDelay: 1,
			repeatRefresh: true,
		})

		const tl = setInterval(() => {
			setActive((curr) => {
				if (curr === countries.length - 1) return 0
				return curr + 1
			})
		}, 2000)

		return () => clearInterval(tl)
	}, [countries])

	return (
		<div className={s['expand-right']}>
			<div className={s['expand-right-top']}>
				<div className={s['expand-right-top-rt']}>
					<div className={s['expand-right-top-rt-top']}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect width='20' height='20' rx='10' fill='#F5F6F8' />
							<rect x='5' y='5' width='10' height='10' rx='5' fill='#E4E3EC' />
						</svg>
						<div>
							<p>We sent out your USD</p>
							<small>Wednesday, 24 Apr, 8:45 PM</small>
						</div>
					</div>
					<div className={s['expand-right-top-rt-btm']}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect x='7' y='7' width='6' height='6' rx='3' fill='#EEEEF0' />
							<rect
								x='1'
								y='1'
								width='18'
								height='18'
								rx='9'
								stroke='#EEEEF0'
								strokeWidth='2'
							/>
						</svg>

						<div>
							{/* <span>Completed</span> */}
							<p>Woohoo! &#127881; Your 150,220 USD transfer is complete</p>
							<small>Wednesday, 24 Apr, 8:45 PM</small>
						</div>
					</div>
				</div>
				<Aside />
			</div>

			<div className={s['expand-right-bottom']}>
				<ul ref={ref}>
					{new Array(2).fill(null).map(() =>
						countries.map((country, idx) => (
							<li
								data-animation='countries'
								key={idx}
								className={cn(active === idx && s.active)}>
								<div>
									<img src={country} alt='' width={28} height={28} />
								</div>
							</li>
						))
					)}
				</ul>
				<Aside />
			</div>
		</div>
	)
}
