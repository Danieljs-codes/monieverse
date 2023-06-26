import { Html, Head, Main, NextScript } from 'next/document'
import { CD_IMAGE } from '~/utils/env'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				{/* START META */}
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta
					name='robots'
					content={
						process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'
					}
				/>
				<meta
					name='googlebot'
					content={
						process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'
					}
				/>
				<meta name='keywords' content='' />
				<meta name='author' content='@jobenetuk' />
				<meta name='referrer' content='no-referrer' />
				<meta name='geo.region' content='NG' />
				<meta name='format-detection' content='telephone=no' />
				<meta httpEquiv='x-dns-prefetch-control' content='off' />
				<meta httpEquiv='Window-Target' content='_value' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='application-name' content='Monie Verse' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Monie Verse' />
				{/* END META */}

				{/* START TWITTER - OG */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:url' content='' />
				<meta name='twitter:title' content='Monie Verse' />
				<meta
					name='twitter:image'
					content={`${CD_IMAGE}/v1683165003/props/Graph_ll5bwk.png`}
				/>
				<meta name='twitter:creator' content='@jobenetuk' />
				<meta
					name='twitter:desc'
					content='Receive and make payments to vendors from across the globe. With multi-currency accounts, you can send and receive from China, UK, Nigeria and more at low-fees.'
				/>

				<meta
					name='og:desc'
					content='Receive and make payments to vendors from across the globe. With multi-currency accounts, you can send and receive from China, UK, Nigeria and more at low-fees.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:title' content='Monie Verse' />
				<meta property='og:site_name' content='Monie Verse' />
				<meta property='og:url' content='' />
				<meta
					property='og:image'
					content={`${CD_IMAGE}/v1683165003/props/Graph_ll5bwk.png`}
				/>
				{/* END TWITTER - OG */}

				{/* START FAVICON */}
				<link rel='manifest' href='/manifest.json' />
				<link href='/icon.svg' rel='icon' type='image/svg' sizes='16x16' />
				<link rel='apple-touch-icon' href='/icon.svg'></link>
				<meta name='theme-color' content='#8872FD' />
				<meta name='msapplication-TileColor' content='#8872FD' />
				<link rel='mask-icon' href='/icon.svg' color='#8872FD' />
				{/* END FAVICON */}

				{/* START FONTS */}
				<link
					as='font'
					rel='preload prefetch'
					type='font/woff2'
					href='/fonts/clash-variable.woff2'
					crossOrigin='anonymous'
				/>
				<link
					as='font'
					rel='preload prefetch'
					type='font/woff2'
					href='/fonts/Inter.woff2'
					crossOrigin='anonymous'
				/>
				{/* END FONTS */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
