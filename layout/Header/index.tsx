import { Image, Link } from '~/shared'
import s from './header.module.scss'
import { useCallback, useRef } from 'react'
import { useEventListener } from '@studio-lumio/hooks'
import gsap from 'gsap'

const Header = () => {
	type ILinks = { href: string; name: string }
	const links: ILinks[] = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/features',
			name: 'Features',
		},
		{
			href: '/faq',
			name: 'FAQs',
		},
	]

	const lastScrollTop = useRef<number>(0)
	const header = useRef<HTMLHeadingElement>(null)

	const onScroll = useCallback(() => {
		const duration = 0.3
		const delay = 0.15
		const ease = 'linear'
		let st = window.scrollY || document.documentElement.scrollTop

		if (st > lastScrollTop.current && window.scrollY > 100) {
			gsap.to(header.current, {
				y: '-200px',
				scaleX: 1.1,
				duration,
				ease,
				delay,
			})
		} else if (st < lastScrollTop.current) {
			gsap.to(header.current, {
				y: '0',
				scaleX: 1,
				duration,
				ease,
			})
		}
		lastScrollTop.current = st <= 0 ? 0 : st
	}, [])

	useEventListener('scroll', onScroll)

	return (
		<header ref={header} className={s.header}>
			<div className={s['header-left']}>
				<Link href='/'>
					<Image alt='monie verse' width={183.37} height={32} src='/logo-text.svg' />
				</Link>
				<ul>
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={s['header-right']}>
				<button>
					<span>Sign up</span>
				</button>
				<button>
					<span>Log in</span>
				</button>
			</div>
		</header>
	)
}

export default Header
