import { Image, Link } from '~/shared'
import s from './header.module.scss'
import { Fragment, useCallback, useRef } from 'react'
import { useEventListener, useMediaQuery } from '@studio-lumio/hooks'
import gsap from 'gsap'

const Header = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')
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
		<Fragment>
			{!isMobile ? (
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
						<Link href='/'>
							<span>Sign up</span>
						</Link>
						<Link href='/'>
							<span>Log in</span>
						</Link>
					</div>
				</header>
			) : (
				<div className={s.nav} ref={header}>
					<header className={s['nav-header']}>
						<Link href='/'>
							<Image alt='monie verse' width={183.37} height={32} src='/logo-text.svg' />
						</Link>

						<div>
							<Link href='/' className={s['nav-header-gt']}>
								<span>Get Started</span>
							</Link>

							<button className={s['nav-header-toggle']}>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10ZM3.125 5.625H16.875C17.0408 5.625 17.1997 5.55915 17.3169 5.44194C17.4342 5.32473 17.5 5.16576 17.5 5C17.5 4.83424 17.4342 4.67527 17.3169 4.55806C17.1997 4.44085 17.0408 4.375 16.875 4.375H3.125C2.95924 4.375 2.80027 4.44085 2.68306 4.55806C2.56585 4.67527 2.5 4.83424 2.5 5C2.5 5.16576 2.56585 5.32473 2.68306 5.44194C2.80027 5.55915 2.95924 5.625 3.125 5.625ZM16.875 14.375H3.125C2.95924 14.375 2.80027 14.4408 2.68306 14.5581C2.56585 14.6753 2.5 14.8342 2.5 15C2.5 15.1658 2.56585 15.3247 2.68306 15.4419C2.80027 15.5592 2.95924 15.625 3.125 15.625H16.875C17.0408 15.625 17.1997 15.5592 17.3169 15.4419C17.4342 15.3247 17.5 15.1658 17.5 15C17.5 14.8342 17.4342 14.6753 17.3169 14.5581C17.1997 14.4408 17.0408 14.375 16.875 14.375Z'
										fill='#8C94A6'
									/>
								</svg>
								{/* <svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M16.0675 15.1827C16.1256 15.2407 16.1717 15.3097 16.2031 15.3855C16.2345 15.4614 16.2507 15.5427 16.2507 15.6249C16.2507 15.707 16.2345 15.7883 16.2031 15.8642C16.1717 15.94 16.1256 16.009 16.0675 16.067C16.0095 16.1251 15.9405 16.1712 15.8647 16.2026C15.7888 16.234 15.7075 16.2502 15.6253 16.2502C15.5432 16.2502 15.4619 16.234 15.386 16.2026C15.3102 16.1712 15.2412 16.1251 15.1832 16.067L10.0003 10.8835L4.81753 16.067C4.70026 16.1843 4.5412 16.2502 4.37535 16.2502C4.2095 16.2502 4.05044 16.1843 3.93316 16.067C3.81588 15.9498 3.75 15.7907 3.75 15.6249C3.75 15.459 3.81588 15.2999 3.93316 15.1827L9.11675 9.99986L3.93316 4.81705C3.81588 4.69977 3.75 4.54071 3.75 4.37486C3.75 4.20901 3.81588 4.04995 3.93316 3.93267C4.05044 3.8154 4.2095 3.74951 4.37535 3.74951C4.5412 3.74951 4.70026 3.8154 4.81753 3.93267L10.0003 9.11627L15.1832 3.93267C15.3004 3.8154 15.4595 3.74951 15.6253 3.74951C15.7912 3.74951 15.9503 3.8154 16.0675 3.93267C16.1848 4.04995 16.2507 4.20901 16.2507 4.37486C16.2507 4.54071 16.1848 4.69977 16.0675 4.81705L10.8839 9.99986L16.0675 15.1827Z'
										fill='#8C94A6'
									/>
								</svg> */}
							</button>
						</div>
					</header>

					<nav className={s['nav-main']}>
						<ul>
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.name}</Link>
								</li>
							))}
							<li>
								<Link href='/'>Login to Your Account</Link>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</Fragment>
	)
}

export default Header
