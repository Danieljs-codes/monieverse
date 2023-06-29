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
			href: '#faq',
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
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M11.354 8.35354L6.35403 13.3535C6.30757 13.4 6.25242 13.4368 6.19173 13.462C6.13103 13.4871 6.06598 13.5001 6.00028 13.5001C5.93458 13.5001 5.86953 13.4871 5.80883 13.462C5.74813 13.4368 5.69298 13.4 5.64653 13.3535C5.60007 13.3071 5.56322 13.2519 5.53808 13.1912C5.51294 13.1305 5.5 13.0655 5.5 12.9998C5.5 12.9341 5.51294 12.869 5.53808 12.8083C5.56322 12.7476 5.60007 12.6925 5.64653 12.646L10.2934 7.99979L5.64653 3.35354C5.55271 3.25972 5.5 3.13247 5.5 2.99979C5.5 2.86711 5.55271 2.73986 5.64653 2.64604C5.74035 2.55222 5.8676 2.49951 6.00028 2.49951C6.13296 2.49951 6.26021 2.55222 6.35403 2.64604L11.354 7.64604C11.4005 7.69248 11.4374 7.74762 11.4626 7.80832C11.4877 7.86902 11.5007 7.93408 11.5007 7.99979C11.5007 8.0655 11.4877 8.13056 11.4626 8.19126C11.4374 8.25196 11.4005 8.3071 11.354 8.35354Z'
										fill='#BBC0CA'
									/>
								</svg>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</Fragment>
	)
}

export default Header
