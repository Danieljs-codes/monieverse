import { Image, Link } from '~/shared'
import s from './header.module.scss'
import { Fragment } from 'react'

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

	return (
		<Fragment>
			<header data-animation='header' className={s.header}>
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

			<div data-animation='nav' className={s.nav}>
				<header className={s['nav-header']}>
					<Link href='/'>
						<Image alt='monie verse' width={183.37} height={32} src='/logo-text.svg' />
					</Link>

					<div>
						<Link href='/' className={s['nav-header-gt']}>
							<span>Get Started</span>
						</Link>

						<button data-animation='nav-toggle' className={s['nav-header-toggle']}>
							<svg width='16' height='16' viewBox='0 0 20 20'>
								<path
									data-animation='nav-toggle-one'
									fill='transparent'
									strokeWidth='2'
									stroke='#8C94A6'
									strokeLinecap='square'
									d='M 2 2.5 L 20 2.5'></path>
								<path
									fill='transparent'
									data-animation='nav-toggle-two'
									strokeWidth='2'
									stroke='#8C94A6'
									strokeLinecap='square'
									d='M 2 9.423 L 20 9.423'
									opacity='1'></path>
								<path
									data-animation='nav-toggle-three'
									fill='transparent'
									strokeWidth='2'
									stroke='#8C94A6'
									strokeLinecap='square'
									d='M 2 16.346 L 20 16.346'></path>
							</svg>
						</button>
					</div>
				</header>

				<nav className={s['nav-main']} data-animation='nav-main'>
					<ul>
						{links.map((link) => (
							<li key={link.href}>
								<Link data-animation='nav-item' href={link.href}>
									{link.name}
								</Link>
							</li>
						))}
						<li>
							<Link data-animation='nav-item' href='/'>
								Login to Your Account
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</Fragment>
	)
}

export default Header
