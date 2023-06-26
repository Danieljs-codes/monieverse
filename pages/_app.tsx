import '../scss/index.scss'

import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { PageTransition } from '~/layout/Transition'
import { isLocal } from '~/utils'

const GridDebugger = dynamic(
	() => import('~/shared/grid-debugger').then(({ GridDebugger }) => GridDebugger),
	{ ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=yes'
				/>
				<meta
					name='description'
					content='Receive and make payments to vendors from across the globe. With multi-currency accounts, you can send and receive from China, UK, Nigeria and more at low-fees.'
				/>
				<title>Monie Verse</title>
			</Head>

			<main className={inter.className}>
				{isLocal && <GridDebugger />}
				<PageTransition />
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp
