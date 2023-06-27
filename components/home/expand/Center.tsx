import { generateKey } from '~/utils'
import s from './expand.module.scss'
import { Shield } from './Shield'
import { Aside } from './Aside'

export const Center = () => {
	const sec2 = [
		{
			type: 'Wire Transfer',
			status: 'In-Progress',
			bank: 'Bank of Venice',
			name: 'Martins Sopuruchi',
			amount: '20,430',
			curr: '€',
			acc: '8902323443',
		},
		{
			type: 'ACH Bank Transfer',
			status: 'Completed',
			bank: 'Capital Bank',
			name: 'Janeth Autsuiba',
			curr: '$',
			amount: '150,220',
			acc: '7894034902',
		},
		{
			type: 'SWIFT / IBAN Transfer',
			status: 'Completed',
			bank: 'Clear Bank',
			name: 'Omah Layinde',
			curr: '₦',
			amount: '40,005,900',
			acc: '0014393439023843',
		},
		{
			type: 'ACH Bank Transfer',
			status: 'Sent',
			bank: 'United Bank Inc.',
			name: 'Cheung Fatoki',
			curr: '$',
			amount: '604,090',
			acc: '01023849344',
		},
	]
	return (
		<div className={s['expand-center']}>
			<div className={s['expand-center-top']}>
				<ul>
					{sec2.map((item, idx) => (
						<li key={generateKey(idx, item.name)} className={s['expand-center-li']}>
							<header>
								<div>
									<svg
										width='12'
										height='13'
										viewBox='0 0 12 13'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M1.125 5.37477H2.25V8.37477H1.5C1.40054 8.37477 1.30516 8.41428 1.23483 8.4846C1.16451 8.55493 1.125 8.65031 1.125 8.74977C1.125 8.84922 1.16451 8.94461 1.23483 9.01493C1.30516 9.08526 1.40054 9.12477 1.5 9.12477H10.5C10.5995 9.12477 10.6948 9.08526 10.7652 9.01493C10.8355 8.94461 10.875 8.84922 10.875 8.74977C10.875 8.65031 10.8355 8.55493 10.7652 8.4846C10.6948 8.41428 10.5995 8.37477 10.5 8.37477H9.75V5.37477H10.875C10.9566 5.37468 11.0359 5.34799 11.101 5.29874C11.166 5.24949 11.2132 5.18037 11.2355 5.10185C11.2577 5.02334 11.2537 4.93973 11.2241 4.8637C11.1945 4.78767 11.1409 4.72336 11.0714 4.68055L6.19641 1.68055C6.13733 1.64423 6.06935 1.625 6 1.625C5.93065 1.625 5.86267 1.64423 5.80359 1.68055L0.928594 4.68055C0.859138 4.72336 0.805542 4.78767 0.775936 4.8637C0.74633 4.93973 0.74233 5.02334 0.764542 5.10185C0.786754 5.18037 0.833966 5.24949 0.899017 5.29874C0.964068 5.34799 1.04341 5.37468 1.125 5.37477ZM3 5.37477H4.5V8.37477H3V5.37477ZM6.75 5.37477V8.37477H5.25V5.37477H6.75ZM9 8.37477H7.5V5.37477H9V8.37477ZM6 2.43992L9.55031 4.62477H2.44969L6 2.43992ZM11.625 10.2498C11.625 10.3492 11.5855 10.4446 11.5152 10.5149C11.4448 10.5853 11.3495 10.6248 11.25 10.6248H0.75C0.650544 10.6248 0.555161 10.5853 0.484835 10.5149C0.414509 10.4446 0.375 10.3492 0.375 10.2498C0.375 10.1503 0.414509 10.0549 0.484835 9.9846C0.555161 9.91428 0.650544 9.87477 0.75 9.87477H11.25C11.3495 9.87477 11.4448 9.91428 11.5152 9.9846C11.5855 10.0549 11.625 10.1503 11.625 10.2498Z'
											fill='#8C94A6'
										/>
									</svg>
									{item.type}
								</div>
								<p className={s[item.status.toLowerCase()]}>
									<span />
									{item.status}
								</p>
							</header>
							<div className={s['expand-center-li-t']}>
								<p>{item.name}</p>
								<span>
									<sub>{item.curr}</sub>
									{item.amount}
								</span>
							</div>
							<div className={s['expand-center-li-b']}>
								<p>{item.bank}</p>
								<p>{item.acc}</p>
							</div>
						</li>
					))}
				</ul>

				<Aside />
			</div>
			<Shield />
		</div>
	)
}
