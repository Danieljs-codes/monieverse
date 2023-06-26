import { Image, Link } from '~/shared'
import s from './footer.module.scss'
import { Fragment } from 'react'

const Footer = () => {
	type ILinks = { href: string; name: string }
	const links: ILinks[] = [
		{
			href: '/privacy',
			name: 'Privacy Policy',
		},
		{
			href: '/terms',
			name: 'Terms of Use',
		},
	]

	return (
		<Fragment>
			<div className={s['footer-top']}>
				<h1>Get Started on Monieverse</h1>
				<p>
					Monieverse is a legally registered company under the applicable laws and
					regulations of the jurisdictions in which we operate.{' '}
				</p>
				<button>
					<span>Create a free account</span>
				</button>
			</div>

			<div className={s['footer-main']}>
				<div className={s['footer-main-left']}>
					<Image src='/icon.svg' width={43.817} height={31.502} alt='monie verse' />
					<p>Monieverse</p>
				</div>

				<div className={s['footer-main-right']}>
					<div className={s['footer-main-right-top']}>
						<ul>
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.name}</Link>
								</li>
							))}
						</ul>
						<p>
							<svg
								width='17'
								height='17'
								viewBox='0 0 17 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M8.82032 0.625977C7.21334 0.625977 5.64246 1.1025 4.30631 1.99529C2.97016 2.88807 1.92876 4.15702 1.31379 5.64167C0.698833 7.12632 0.537931 8.75999 0.851436 10.3361C1.16494 11.9122 1.93877 13.3599 3.07507 14.4962C4.21138 15.6325 5.65911 16.4064 7.23521 16.7199C8.8113 17.0334 10.445 16.8725 11.9296 16.2575C13.4143 15.6425 14.6832 14.6011 15.576 13.265C16.4688 11.9288 16.9453 10.358 16.9453 8.75098C16.943 6.59679 16.0863 4.53149 14.563 3.00825C13.0398 1.48501 10.9745 0.628251 8.82032 0.625977ZM8.82032 15.626C7.46057 15.626 6.13136 15.2228 5.00077 14.4673C3.87018 13.7119 2.989 12.6382 2.46864 11.3819C1.94829 10.1257 1.81214 8.74335 2.07742 7.40973C2.34269 6.07611 2.99747 4.8511 3.95896 3.88962C4.92044 2.92813 6.14545 2.27335 7.47907 2.00808C8.81269 1.7428 10.195 1.87895 11.4513 2.3993C12.7075 2.91966 13.7812 3.80084 14.5367 4.93143C15.2921 6.06202 15.6953 7.39123 15.6953 8.75098C15.6932 10.5737 14.9683 12.3212 13.6794 13.6101C12.3905 14.8989 10.643 15.6239 8.82032 15.626ZM6.32032 8.75098C6.32032 9.27568 6.48541 9.78709 6.79221 10.2128C7.09901 10.6384 7.53197 10.9568 8.02975 11.1227C8.52753 11.2886 9.0649 11.2937 9.56573 11.1373C10.0666 10.9808 10.5055 10.6707 10.8203 10.251C10.9199 10.1184 11.068 10.0307 11.2322 10.0074C11.3964 9.984 11.5631 10.0268 11.6957 10.1264C11.8283 10.2259 11.9159 10.3741 11.9393 10.5383C11.9627 10.7024 11.9199 10.8691 11.8203 11.0018C11.348 11.6312 10.6896 12.0961 9.93833 12.3306C9.18711 12.5651 8.38114 12.5573 7.63458 12.3084C6.88803 12.0594 6.23871 11.5819 5.7786 10.9434C5.31849 10.305 5.0709 9.53795 5.0709 8.75098C5.0709 7.964 5.31849 7.19697 5.7786 6.55851C6.23871 5.92005 6.88803 5.44253 7.63458 5.19357C8.38114 4.94461 9.18711 4.93683 9.93833 5.17133C10.6896 5.40584 11.348 5.87074 11.8203 6.5002C11.8696 6.56586 11.9055 6.64058 11.9259 6.72011C11.9463 6.79964 11.9509 6.88241 11.9393 6.9637C11.9277 7.04499 11.9003 7.1232 11.8585 7.19387C11.8167 7.26454 11.7614 7.32629 11.6957 7.37559C11.63 7.42488 11.5553 7.46076 11.4758 7.48118C11.3963 7.5016 11.3135 7.50615 11.2322 7.49458C11.1509 7.48301 11.0727 7.45554 11.002 7.41374C10.9314 7.37195 10.8696 7.31664 10.8203 7.25098C10.5055 6.83121 10.0666 6.52114 9.56573 6.36469C9.0649 6.20824 8.52753 6.21334 8.02975 6.37927C7.53197 6.5452 7.09901 6.86354 6.79221 7.2892C6.48541 7.71486 6.32032 8.22627 6.32032 8.75098Z'
									fill='#8C94A6'
								/>
							</svg>
							2023 Monieverse Ltd. All rights reserved
						</p>
					</div>

					<div className={s['footer-main-right-bottom']}>
						<p>
							Monieverse Ltd. (Monieverse)is an essential tool for businesses operating
							globally. It ensures that businesses remain compliant with local and global
							tax laws and regulations, helping them avoid legal trouble and costly
							penalties. Monieverse can also provide businesses with a better
							understanding of the tax implications of their operations, allowing them to
							make informed decisions that minimize tax liabilities.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Footer
