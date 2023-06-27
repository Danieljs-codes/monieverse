import { generateKey } from '~/utils'
import s from './expand.module.scss'
import { Image } from '~/shared'
import { Shield } from './Shield'

const Expand = () => {
	const balances = [
		{
			name: 'Nigerian Naira',
			flag: '/nig.png',
			bal: '₦20,899,990',
			sub: '10',
		},
		{
			name: 'Nigerian Naira',
			flag: '/usa.png',
			bal: '$32,899,990',
			sub: '10',
		},
	]

	const transactions = [
		{
			img: (
				<svg
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='40' height='40' rx='20' fill='#F2F0FF' />
					<path
						d='M15.9548 17.4929C15.9017 17.0223 15.683 16.6577 15.2985 16.3991C14.914 16.1373 14.4301 16.0064 13.8468 16.0064C13.4292 16.0064 13.0679 16.0727 12.763 16.2053C12.4581 16.3345 12.2211 16.5135 12.0521 16.7422C11.8863 16.9676 11.8035 17.2244 11.8035 17.5128C11.8035 17.7547 11.8598 17.9635 11.9725 18.1392C12.0885 18.3149 12.2393 18.4624 12.4249 18.5817C12.6139 18.6977 12.816 18.7955 13.0315 18.875C13.2469 18.9512 13.4541 19.0142 13.6529 19.0639L14.6472 19.3224C14.972 19.402 15.3051 19.5097 15.6465 19.6456C15.9879 19.7815 16.3044 19.9605 16.5961 20.1825C16.8878 20.4046 17.1231 20.6797 17.3021 21.0078C17.4844 21.3359 17.5755 21.7287 17.5755 22.1861C17.5755 22.7628 17.4264 23.2749 17.1281 23.7223C16.8331 24.1697 16.4039 24.5227 15.8404 24.7812C15.2803 25.0398 14.6025 25.169 13.807 25.169C13.0447 25.169 12.3852 25.0481 11.8283 24.8061C11.2715 24.5642 10.8357 24.2211 10.5208 23.777C10.2059 23.3295 10.0319 22.7992 9.9988 22.1861H11.54C11.5698 22.554 11.6891 22.8606 11.8979 23.1058C12.1101 23.3478 12.3802 23.5284 12.7083 23.6477C13.0398 23.7637 13.4027 23.8217 13.7971 23.8217C14.2313 23.8217 14.6174 23.7538 14.9555 23.6179C15.2969 23.4787 15.5653 23.2865 15.7609 23.0412C15.9564 22.7926 16.0542 22.5026 16.0542 22.1712C16.0542 21.8696 15.968 21.6226 15.7957 21.4304C15.6266 21.2382 15.3963 21.0791 15.1046 20.9531C14.8163 20.8272 14.4898 20.7161 14.1252 20.62L12.9221 20.2919C12.1068 20.0698 11.4604 19.7434 10.9832 19.3125C10.5092 18.8816 10.2722 18.3116 10.2722 17.6023C10.2722 17.0156 10.4313 16.5036 10.7495 16.0661C11.0677 15.6286 11.4986 15.2888 12.0421 15.0469C12.5857 14.8016 13.1988 14.679 13.8816 14.679C14.571 14.679 15.1792 14.8 15.7062 15.0419C16.2365 15.2839 16.6541 15.617 16.959 16.0412C17.264 16.4621 17.423 16.946 17.4363 17.4929H15.9548ZM19.2713 14.8182H21.1356L24.3771 22.733H24.4964L27.7379 14.8182H29.6022V25H28.1406V17.6321H28.0461L25.0433 24.9851H23.8302L20.8274 17.6271H20.7329V25H19.2713V14.8182Z'
						fill='#5F4CC8'
					/>
				</svg>
			),
			name: 'Sade Mintami',
			date: 'Mar 16, 2023',
			bal: '- ₦23,454,300',
		},
		{
			img: (
				<svg
					width='40'
					height='36'
					viewBox='0 0 40 36'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='40' height='40' rx='20' fill='#F5F6F8' />
					<path
						d='M19.3913 19.6729V20.3294L18.8672 20.0011L19.3913 19.6729Z'
						fill='#BBC0CA'
					/>
					<path
						d='M19.221 14.843L11.1577 9.8048C10.8476 9.61256 10.4486 9.83382 10.4486 10.1965V13.7367C10.4486 13.9779 10.3851 14.2173 10.2509 14.4168C10.1258 14.6018 9.95531 14.7414 9.76126 14.8285C9.61435 14.8938 9.45294 14.9282 9.28972 14.9282H6.18303C5.92731 14.9282 5.71875 15.1368 5.71875 15.3925L5.71875 23.7477C5.71875 24.0034 5.92731 24.212 6.18303 24.212H9.81748C10.0732 24.212 10.2818 24.0053 10.2818 23.7477C10.2799 21.8525 10.2781 15.6899 10.2781 15.6899C10.2781 15.5448 10.3325 15.4052 10.4287 15.2982C10.5447 15.1712 10.7025 15.1041 10.8657 15.1041C10.9727 15.1041 11.0797 15.1331 11.1777 15.193L18.2434 19.6091C18.5336 19.7905 18.5336 20.2148 18.2434 20.3962L10.6227 25.1587C10.5139 25.2258 10.4486 25.3455 10.4486 25.4725V29.8015C10.4486 30.1642 10.8494 30.3873 11.1577 30.1932L19.221 25.1551C19.328 25.088 19.3951 24.9683 19.3951 24.8413V19.6726V15.1585C19.3951 15.0298 19.3298 14.9119 19.221 14.843Z'
						fill='#BBC0CA'
					/>
					<path
						d='M20.7757 25.1563L28.8389 30.1945C29.149 30.3867 29.548 30.1655 29.548 29.8028V26.2626C29.548 26.0214 29.6115 25.782 29.7457 25.5825C29.8709 25.3975 30.0413 25.2579 30.2354 25.1708C30.3823 25.1056 30.5437 25.0711 30.7069 25.0711H33.8118C34.0675 25.0711 34.2761 24.8625 34.2761 24.6068V16.2534C34.2761 15.9977 34.0675 15.7891 33.8118 15.7891H30.1774C29.9216 15.7891 29.7131 15.9959 29.7131 16.2534C29.7149 18.1486 29.7167 24.3112 29.7167 24.3112C29.7167 24.4563 29.6623 24.5959 29.5662 24.7029C29.4501 24.8299 29.2923 24.897 29.1291 24.897C29.0221 24.897 28.9151 24.868 28.8172 24.8081L21.755 20.392C21.4648 20.2107 21.4648 19.7863 21.755 19.6049L29.3739 14.8388C29.4827 14.7717 29.548 14.652 29.548 14.525V10.1978C29.548 9.83508 29.1472 9.612 28.8389 9.80606L20.7757 14.8424C20.6687 14.9095 20.6016 15.0292 20.6016 15.1562V20.3267V24.8408C20.6016 24.9695 20.6669 25.0892 20.7757 25.1563Z'
						fill='#BBC0CA'
					/>
				</svg>
			),
			name: 'Madarachi & Sons Co.',
			date: 'Mar 10, 2023',
			bal: '+ $32,289.90',
			type: 'credit',
		},
		{
			img: (
				<svg
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='40' height='40' rx='20' fill='#F2F0FF' />
					<path
						d='M15.9548 17.4929C15.9017 17.0223 15.683 16.6577 15.2985 16.3991C14.914 16.1373 14.4301 16.0064 13.8468 16.0064C13.4292 16.0064 13.0679 16.0727 12.763 16.2053C12.4581 16.3345 12.2211 16.5135 12.0521 16.7422C11.8863 16.9676 11.8035 17.2244 11.8035 17.5128C11.8035 17.7547 11.8598 17.9635 11.9725 18.1392C12.0885 18.3149 12.2393 18.4624 12.4249 18.5817C12.6139 18.6977 12.816 18.7955 13.0315 18.875C13.2469 18.9512 13.4541 19.0142 13.6529 19.0639L14.6472 19.3224C14.972 19.402 15.3051 19.5097 15.6465 19.6456C15.9879 19.7815 16.3044 19.9605 16.5961 20.1825C16.8878 20.4046 17.1231 20.6797 17.3021 21.0078C17.4844 21.3359 17.5755 21.7287 17.5755 22.1861C17.5755 22.7628 17.4264 23.2749 17.1281 23.7223C16.8331 24.1697 16.4039 24.5227 15.8404 24.7812C15.2803 25.0398 14.6025 25.169 13.807 25.169C13.0447 25.169 12.3852 25.0481 11.8283 24.8061C11.2715 24.5642 10.8357 24.2211 10.5208 23.777C10.2059 23.3295 10.0319 22.7992 9.9988 22.1861H11.54C11.5698 22.554 11.6891 22.8606 11.8979 23.1058C12.1101 23.3478 12.3802 23.5284 12.7083 23.6477C13.0398 23.7637 13.4027 23.8217 13.7971 23.8217C14.2313 23.8217 14.6174 23.7538 14.9555 23.6179C15.2969 23.4787 15.5653 23.2865 15.7609 23.0412C15.9564 22.7926 16.0542 22.5026 16.0542 22.1712C16.0542 21.8696 15.968 21.6226 15.7957 21.4304C15.6266 21.2382 15.3963 21.0791 15.1046 20.9531C14.8163 20.8272 14.4898 20.7161 14.1252 20.62L12.9221 20.2919C12.1068 20.0698 11.4604 19.7434 10.9832 19.3125C10.5092 18.8816 10.2722 18.3116 10.2722 17.6023C10.2722 17.0156 10.4313 16.5036 10.7495 16.0661C11.0677 15.6286 11.4986 15.2888 12.0421 15.0469C12.5857 14.8016 13.1988 14.679 13.8816 14.679C14.571 14.679 15.1792 14.8 15.7062 15.0419C16.2365 15.2839 16.6541 15.617 16.959 16.0412C17.264 16.4621 17.423 16.946 17.4363 17.4929H15.9548ZM19.2713 14.8182H21.1356L24.3771 22.733H24.4964L27.7379 14.8182H29.6022V25H28.1406V17.6321H28.0461L25.0433 24.9851H23.8302L20.8274 17.6271H20.7329V25H19.2713V14.8182Z'
						fill='#5F4CC8'
					/>
				</svg>
			),
			name: 'Sade Mintami',
			date: 'Mar 16, 2023',
			bal: '- ₦23,454,300',
		},
		{
			img: (
				<svg
					width='40'
					height='36'
					viewBox='0 0 40 36'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='40' height='40' rx='20' fill='#F5F6F8' />
					<path
						d='M19.3913 19.6729V20.3294L18.8672 20.0011L19.3913 19.6729Z'
						fill='#BBC0CA'
					/>
					<path
						d='M19.221 14.843L11.1577 9.8048C10.8476 9.61256 10.4486 9.83382 10.4486 10.1965V13.7367C10.4486 13.9779 10.3851 14.2173 10.2509 14.4168C10.1258 14.6018 9.95531 14.7414 9.76126 14.8285C9.61435 14.8938 9.45294 14.9282 9.28972 14.9282H6.18303C5.92731 14.9282 5.71875 15.1368 5.71875 15.3925L5.71875 23.7477C5.71875 24.0034 5.92731 24.212 6.18303 24.212H9.81748C10.0732 24.212 10.2818 24.0053 10.2818 23.7477C10.2799 21.8525 10.2781 15.6899 10.2781 15.6899C10.2781 15.5448 10.3325 15.4052 10.4287 15.2982C10.5447 15.1712 10.7025 15.1041 10.8657 15.1041C10.9727 15.1041 11.0797 15.1331 11.1777 15.193L18.2434 19.6091C18.5336 19.7905 18.5336 20.2148 18.2434 20.3962L10.6227 25.1587C10.5139 25.2258 10.4486 25.3455 10.4486 25.4725V29.8015C10.4486 30.1642 10.8494 30.3873 11.1577 30.1932L19.221 25.1551C19.328 25.088 19.3951 24.9683 19.3951 24.8413V19.6726V15.1585C19.3951 15.0298 19.3298 14.9119 19.221 14.843Z'
						fill='#BBC0CA'
					/>
					<path
						d='M20.7757 25.1563L28.8389 30.1945C29.149 30.3867 29.548 30.1655 29.548 29.8028V26.2626C29.548 26.0214 29.6115 25.782 29.7457 25.5825C29.8709 25.3975 30.0413 25.2579 30.2354 25.1708C30.3823 25.1056 30.5437 25.0711 30.7069 25.0711H33.8118C34.0675 25.0711 34.2761 24.8625 34.2761 24.6068V16.2534C34.2761 15.9977 34.0675 15.7891 33.8118 15.7891H30.1774C29.9216 15.7891 29.7131 15.9959 29.7131 16.2534C29.7149 18.1486 29.7167 24.3112 29.7167 24.3112C29.7167 24.4563 29.6623 24.5959 29.5662 24.7029C29.4501 24.8299 29.2923 24.897 29.1291 24.897C29.0221 24.897 28.9151 24.868 28.8172 24.8081L21.755 20.392C21.4648 20.2107 21.4648 19.7863 21.755 19.6049L29.3739 14.8388C29.4827 14.7717 29.548 14.652 29.548 14.525V10.1978C29.548 9.83508 29.1472 9.612 28.8389 9.80606L20.7757 14.8424C20.6687 14.9095 20.6016 15.0292 20.6016 15.1562V20.3267V24.8408C20.6016 24.9695 20.6669 25.0892 20.7757 25.1563Z'
						fill='#BBC0CA'
					/>
				</svg>
			),
			name: 'Madarachi & Sons Co.',
			date: 'Mar 10, 2023',
			bal: '+ $32,289.90',
			type: 'credit',
		},
	]

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
		<div className={s.expand}>
			<section className={s['expand-top']}>
				<div>move money, seamlessly!</div>
				<h1>
					Expand Payment Horizons{' '}
					<svg
						width='49'
						height='48'
						viewBox='0 0 49 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_3655_53150)'>
							<path
								d='M40.5982 23.5239L19.5982 46.0239C19.3757 46.2614 19.0819 46.4201 18.7613 46.476C18.4407 46.5319 18.1106 46.482 17.8208 46.3338C17.531 46.1856 17.2973 45.9472 17.1549 45.6546C17.0125 45.3619 16.9691 45.0309 17.0314 44.7114L19.7801 30.962L8.97448 26.9045C8.74241 26.8177 8.53546 26.6748 8.37212 26.4885C8.20878 26.3022 8.09413 26.0783 8.03841 25.8369C7.9827 25.5955 7.98766 25.344 8.05284 25.105C8.11803 24.8659 8.24142 24.6468 8.41198 24.467L29.412 1.96704C29.6345 1.72954 29.9283 1.57087 30.2489 1.51497C30.5695 1.45907 30.8996 1.50897 31.1894 1.65714C31.4792 1.80531 31.7129 2.04372 31.8553 2.33638C31.9977 2.62904 32.0411 2.96008 31.9789 3.27954L29.2226 17.0439L40.0282 21.0958C40.2586 21.1832 40.4639 21.326 40.6259 21.5115C40.788 21.6971 40.9019 21.9197 40.9575 22.1597C41.0131 22.3998 41.0087 22.6498 40.9447 22.8877C40.8808 23.1256 40.7592 23.3441 40.5907 23.5239H40.5982Z'
								fill='#FF7D52'
							/>
						</g>
						<defs>
							<clipPath id='clip0_3655_53150'>
								<rect width='48' height='48' fill='white' transform='translate(0.5)' />
							</clipPath>
						</defs>
					</svg>
					Anytime
				</h1>
				<p>
					Set up an account either as an agent or business and complete your profile to
					enable you send and receive money.
				</p>
			</section>

			<div className={s['expand-main']}>
				<div className={s['expand-left']}>
					<div>
						<div className={s['expand-left-top']}>
							<header>
								<Image src='/icon.svg' width={38} height={28} alt='monie verse' />

								<svg
									width='97'
									height='32'
									viewBox='0 0 97 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<rect x='0.5' width='32' height='32' rx='16' fill='#F5F6F8' />
									<path
										d='M23.8272 19.7453C23.3936 18.9984 22.7491 16.8852 22.7491 14.125C22.7491 12.4674 22.0906 10.8777 20.9185 9.70558C19.7464 8.53348 18.1567 7.875 16.4991 7.875C14.8415 7.875 13.2518 8.53348 12.0797 9.70558C10.9076 10.8777 10.2491 12.4674 10.2491 14.125C10.2491 16.8859 9.60378 18.9984 9.17019 19.7453C9.05946 19.9352 9.00076 20.1509 9.00001 20.3707C8.99925 20.5905 9.05647 20.8066 9.16589 20.9973C9.27531 21.1879 9.43306 21.3463 9.62324 21.4565C9.81342 21.5667 10.0293 21.6248 10.2491 21.625H13.4374C13.5816 22.3306 13.9651 22.9647 14.5229 23.4201C15.0808 23.8756 15.7789 24.1243 16.4991 24.1243C17.2193 24.1243 17.9173 23.8756 18.4752 23.4201C19.0331 22.9647 19.4166 22.3306 19.5608 21.625H22.7491C22.9688 21.6247 23.1846 21.5665 23.3747 21.4562C23.5647 21.346 23.7224 21.1875 23.8317 20.9969C23.941 20.8063 23.9982 20.5903 23.9974 20.3705C23.9966 20.1508 23.9379 19.9351 23.8272 19.7453ZM16.4991 22.875C16.1115 22.8749 15.7334 22.7546 15.4169 22.5308C15.1004 22.3069 14.8611 21.9905 14.7319 21.625H18.2663C18.1371 21.9905 17.8978 22.3069 17.5813 22.5308C17.2648 22.7546 16.8867 22.8749 16.4991 22.875ZM10.2491 20.375C10.8507 19.3406 11.4991 16.9438 11.4991 14.125C11.4991 12.7989 12.0259 11.5271 12.9636 10.5895C13.9012 9.65178 15.173 9.125 16.4991 9.125C17.8252 9.125 19.0969 9.65178 20.0346 10.5895C20.9723 11.5271 21.4991 12.7989 21.4991 14.125C21.4991 16.9414 22.146 19.3383 22.7491 20.375H10.2491Z'
										fill='#5F4CC8'
									/>
									<line
										x1='49'
										y1='4.5'
										x2='49'
										y2='27.5'
										stroke='#EEEEF0'
										strokeLinecap='round'
									/>
									<rect x='64.5' width='32' height='32' rx='16' fill='#F1FEF8' />
									<path
										d='M75.7276 20H72.3956V10.62H75.7276C78.6256 10.62 80.4736 12.412 80.4736 15.31C80.4736 18.208 78.6256 20 75.7276 20ZM75.7276 11.978H73.9076V18.642H75.7276C77.9676 18.642 78.8636 17.718 78.8636 15.31C78.8636 12.902 77.9676 11.978 75.7276 11.978ZM85.5171 20.14C82.8151 20.14 81.6391 18.894 81.6391 17.088V16.85H83.1231V17.004C83.1231 18.166 83.6131 18.754 85.5731 18.754C86.9591 18.754 87.4631 18.376 87.4631 17.508C87.4631 16.654 87.1831 16.346 85.7411 16.052L84.1451 15.73C82.5351 15.422 81.6671 14.638 81.6671 13.154C81.6671 11.768 82.7451 10.48 85.1671 10.48C87.7571 10.48 88.7931 11.936 88.7931 13.602V13.77H87.3091V13.616C87.3091 12.468 86.8051 11.866 85.1251 11.866C83.7391 11.866 83.1791 12.258 83.1791 13.084C83.1791 13.938 83.5571 14.176 84.8451 14.456L86.4411 14.792C88.2051 15.156 88.9751 16.038 88.9751 17.452C88.9751 18.922 87.9111 20.14 85.5171 20.14Z'
										fill='#339969'
									/>
								</svg>
							</header>
						</div>

						<div className={s['expand-left-center']}>
							<header>
								<p>Your Balances</p>

								<svg
									width='33'
									height='6'
									viewBox='0 0 33 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<rect width='6' height='6' rx='3' fill='#8872FD' />
									<rect x='11' y='1' width='4' height='4' rx='2' fill='#E4E3EC' />
									<rect x='20' y='1' width='4' height='4' rx='2' fill='#E4E3EC' />
									<rect x='29' y='1' width='4' height='4' rx='2' fill='#E4E3EC' />
								</svg>
							</header>

							<ul>
								{balances.map((bal, idx) => (
									<li key={generateKey(idx, bal.name)}>
										<header>
											<Image src={bal.flag} width={20} height={20} alt={bal.name} />
											<p>{bal.name}</p>
										</header>

										<div>
											<h1>Available Balance</h1>
											<p>
												{bal.bal}
												<sub>.{bal.sub}</sub>
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className={s['expand-left-bottom']}>
							<header>
								<p>Transactions</p>

								<aside>
									See All{' '}
									<svg
										width='4'
										height='6'
										viewBox='0 0 4 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M0.7 6L0 5.3L2.3 3L0 0.7L0.7 0L3.7 3L0.7 6Z'
											fill='#5F4CC8'
										/>
									</svg>
								</aside>
							</header>

							<ul>
								{transactions.map((trans, idx) => (
									<li key={generateKey(idx, trans.name)}>
										{trans.img}
										<div className={s.li}>
											<div>
												<p>{trans.name}</p>
												<small>{trans.date}</small>
											</div>
											<p className={s[trans.type]}>{trans.bal}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<Aside />
				</div>

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
			</div>
		</div>
	)
}

export default Expand

const Aside = () => {
	return (
		<aside className={s.as}>
			<h1>Easy to Use</h1>
			<p>Regardless of expertise, Monieverse gives you a simplified experience.</p>
		</aside>
	)
}
