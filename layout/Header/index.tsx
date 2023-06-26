import { Image, Link } from '~/shared'
import s from './header.module.scss'

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
		<header className={s.header}>
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
