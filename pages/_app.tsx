import '../scss/index.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PageTransition } from '~/layout/Transition'

// import Script from 'next/script'
// import { NODE_ENV, HOTJAR_ID } from '~/utils/env'

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

			{/* Hotjar Tracking Code 
			{NODE_ENV !== 'development' && (
				<>
					<Script
						id='hotjar'
						strategy='worker'
						dangerouslySetInnerHTML={{
							__html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
						}}
					/>
				</>
			)} */}

			<main>
				<PageTransition />
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp
