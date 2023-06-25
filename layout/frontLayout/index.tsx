import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { raf } from '@studio-freight/tempus'
import { useEffectOnce } from '@studio-lumio/hooks'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CustomEase from 'gsap/dist/CustomEase'
import S from './Layout.module.scss'
import { useLenis, Lenis } from '@studio-freight/react-lenis'
import { capitalize, scrollOptions } from '~/utils'
import { Link } from '~/shared'
import Head from 'next/head'

const Scrollbar = dynamic(() => import('~/shared').then(({ Scrollbar }) => Scrollbar), {
	ssr: false,
})
const RealViewport = dynamic(() =>
	import('~/shared').then(({ RealViewport }) => RealViewport)
)

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger, CustomEase)
	// ScrollTrigger.normalizeScroll()

	ScrollTrigger.defaults({
		// markers: process.env.NODE_ENV === 'development',
		onToggle: (scrollTrigger) => {
			scrollTrigger.refresh()
		},
	})

	// merge rafs
	gsap.ticker.lagSmoothing(0)
	gsap.ticker.remove(gsap.updateRoot)
	raf.add((time) => {
		gsap.updateRoot(time / 1000)
	}, 0)
}

const FrontLayout = ({
	children,
	page,
	desc,
}: {
	children: any
	page: string
	desc?: string
}) => {
	type ILinks = { href: string; name: string }
	const links: ILinks[] = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/about',
			name: 'About',
		},
		{
			href: '/contact',
			name: 'Contact',
		},
	]

	const lenis = useLenis(() => ScrollTrigger.update())
	useEffect(() => ScrollTrigger.refresh(), [lenis])

	useEffectOnce(() => {
		const init = async () => {
			const App = (await import('@/animations')).App
			new App({ page })
		}
		init()
	})
	const pageDesc = 'starter file for studio lumio'
	return (
		<Lenis root options={{ ...scrollOptions }}>
			<Head>
				<title>{`${capitalize(page)} -  - Diana Benjamin Etuk`}</title>
				<meta name='description' content={desc ? desc : pageDesc} />
				<meta property='og:description' content={desc ? desc : pageDesc} />
				<meta name='twitter:description' content={desc ? desc : pageDesc} />
			</Head>
			<main className={S.layout} data-main>
				<RealViewport />
				<Scrollbar />

				<header className={S.header}>
					<div className={S['header-left']}>
						<ul>
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</header>

				<div className={S.child} data-page={page}>
					{children}
				</div>
			</main>
		</Lenis>
	)
}

export default FrontLayout
