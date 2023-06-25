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
				<meta
					name='keywords'
					content='lumio,studio,studiolumio, studio-lumio,creative,UX,UI,userexperience,webdesign,webdeveloper,design,codedesign,code,hashtag,development,website,websitedevelopment,webservices,art direction,strategy,web,murals,illustration,nigeria'
				/>
				<meta name='author' content='Studio Lumio' />
				<meta name='referrer' content='no-referrer' />
				<meta name='geo.region' content='NG' />
				<meta name='format-detection' content='telephone=no' />
				<meta httpEquiv='x-dns-prefetch-control' content='off' />
				<meta httpEquiv='Window-Target' content='_value' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='application-name' content='Starter' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Starter' />
				{/* END META */}

				{/* START TWITTER - OG */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:url' content='https://starter.studiolumio.com/' />
				<meta name='twitter:title' content='Starter' />
				<meta
					name='twitter:image'
					content={`${CD_IMAGE}/v1683165003/props/Graph_ll5bwk.png`}
				/>
				<meta name='twitter:creator' content='@studio_lumio' />
				<meta name='twitter:desc' content='starter' />

				<meta name='og:desc' content='starter' />
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:title' content='Starter' />
				<meta property='og:site_name' content='Starter' />
				<meta property='og:url' content='https://starter.studiolumio.com/' />
				<meta
					property='og:image'
					content={`${CD_IMAGE}/v1683165003/props/Graph_ll5bwk.png`}
				/>
				{/* END TWITTER - OG */}

				{/* START FAVICON */}
				<link rel='manifest' href='/manifest.json' />
				<link href='/icon.svg' rel='icon' type='image/svg' sizes='16x16' />
				<link rel='apple-touch-icon' href='/icon.svg'></link>
				<meta name='theme-color' content='#4D3D30' />
				<meta name='msapplication-TileColor' content='#4D3D30' />
				<link rel='mask-icon' href='/icon.svg' color='#4D3D30' />
				{/* END FAVICON */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
