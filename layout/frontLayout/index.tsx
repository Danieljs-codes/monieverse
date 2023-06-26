import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { raf } from '@studio-freight/tempus'
import { useEffectOnce } from '@studio-lumio/hooks'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CustomEase from 'gsap/dist/CustomEase'

import { useLenis, Lenis } from '@studio-freight/react-lenis'
import { capitalize, scrollOptions } from '~/utils'

import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const Scrollbar = dynamic(() => import('~/shared').then(({ Scrollbar }) => Scrollbar), {
	ssr: false,
})
const RealViewport = dynamic(
	() => import('~/shared').then(({ RealViewport }) => RealViewport),
	{
		ssr: false,
	}
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
	title,
}: {
	children: any
	page: string
	desc?: string
	title?: string
}) => {
	const lenis = useLenis(() => ScrollTrigger.update())
	useEffect(() => ScrollTrigger.refresh(), [lenis])

	useEffectOnce(() => {
		const init = async () => {
			const App = (await import('@/animations')).App
			new App({ page })
		}
		init()
	})
	const pageDesc =
		'Receive and make payments to vendors from across the globe. With multi-currency accounts, you can send and receive from China, UK, Nigeria and more at low-fees.'

	return (
		<Lenis root options={{ ...scrollOptions }}>
			<Head>
				<title>{`${capitalize(title || page)} - Monie Verse`}</title>
				<meta name='description' content={desc || pageDesc} />
				<meta property='og:description' content={desc || pageDesc} />
				<meta name='twitter:description' content={desc || pageDesc} />
			</Head>
			<main>
				<RealViewport />
				<Scrollbar />
				<Header />

				<div data-page={page}>{children}</div>
				<Footer />
			</main>
		</Lenis>
	)
}

export default FrontLayout
