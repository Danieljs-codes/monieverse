import s from './create.module.scss'

const Create = () => {
	// eslint-disable-next-line no-unused-vars
	const section = [
		{
			title: (
				<span>
					Create an
					<svg
						width='34'
						height='40'
						viewBox='0 0 34 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M30.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V36.5C0.5 37.2957 0.81607 38.0587 1.37868 38.6213C1.94129 39.1839 2.70435 39.5 3.5 39.5H30.5C31.2956 39.5 32.0587 39.1839 32.6213 38.6213C33.1839 38.0587 33.5 37.2957 33.5 36.5V3.5C33.5 2.70435 33.1839 1.94129 32.6213 1.37868C32.0587 0.81607 31.2956 0.5 30.5 0.5ZM11 5H23C23.3978 5 23.7794 5.15804 24.0607 5.43934C24.342 5.72064 24.5 6.10218 24.5 6.5C24.5 6.89782 24.342 7.27936 24.0607 7.56066C23.7794 7.84196 23.3978 8 23 8H11C10.6022 8 10.2206 7.84196 9.93934 7.56066C9.65804 7.27936 9.5 6.89782 9.5 6.5C9.5 6.10218 9.65804 5.72064 9.93934 5.43934C10.2206 5.15804 10.6022 5 11 5ZM26.9019 33.2C26.7442 33.3185 26.5648 33.4047 26.3738 33.4538C26.1828 33.5028 25.984 33.5137 25.7887 33.4859C25.5935 33.458 25.4057 33.3919 25.236 33.2914C25.0664 33.1908 24.9182 33.0579 24.8 32.9C23.8918 31.6891 22.7142 30.7063 21.3603 30.0293C20.0065 29.3524 18.5136 29 17 29C15.4864 29 13.9935 29.3524 12.6397 30.0293C11.2858 30.7063 10.1082 31.6891 9.2 32.9C9.08181 33.0576 8.93374 33.1903 8.76424 33.2907C8.59474 33.3911 8.40714 33.4571 8.21213 33.4849C8.01713 33.5128 7.81855 33.502 7.62773 33.4531C7.43691 33.4042 7.25759 33.3182 7.1 33.2C6.94241 33.0818 6.80965 32.9337 6.70929 32.7642C6.60893 32.5947 6.54293 32.4071 6.51508 32.2121C6.48722 32.0171 6.49804 31.8186 6.54693 31.6277C6.59582 31.4369 6.68181 31.2576 6.8 31.1C8.12822 29.3192 9.89942 27.9171 11.9375 27.0331C10.8206 26.0134 10.0381 24.6798 9.69262 23.2074C9.34719 21.7349 9.45498 20.1925 10.0019 18.7824C10.5487 17.3723 11.5091 16.1606 12.757 15.3061C14.0049 14.4516 15.482 13.9944 16.9944 13.9944C18.5068 13.9944 19.9838 14.4516 21.2317 15.3061C22.4796 16.1606 23.44 17.3723 23.9869 18.7824C24.5338 20.1925 24.6416 21.7349 24.2961 23.2074C23.9507 24.6798 23.1682 26.0134 22.0513 27.0331C24.0934 27.9155 25.8687 29.3177 27.2 31.1C27.4389 31.418 27.5417 31.8179 27.4858 32.2117C27.4299 32.6055 27.2198 32.961 26.9019 33.2ZM21.5 21.5C21.5 22.39 21.2361 23.26 20.7416 24.0001C20.2471 24.7401 19.5443 25.3169 18.7221 25.6575C17.8998 25.9981 16.995 26.0872 16.1221 25.9135C15.2492 25.7399 14.4474 25.3113 13.818 24.682C13.1887 24.0526 12.7601 23.2508 12.5865 22.3779C12.4128 21.505 12.5019 20.6002 12.8425 19.7779C13.1831 18.9557 13.7599 18.2529 14.4999 17.7584C15.24 17.2639 16.11 17 17 17C18.1935 17 19.3381 17.4741 20.182 18.318C21.0259 19.1619 21.5 20.3065 21.5 21.5Z'
							fill='#0BA5EC'
						/>
					</svg>
					Account
				</span>
			),
			desc: 'Set up an account either as an agent or business and complete your profile to enable you send and receive money.',
		},
		{
			title: (
				<span>
					Receive Business Payments{' '}
					<svg
						width='48'
						height='48'
						viewBox='0 0 48 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M37.2206 10.5169C34.9575 6.6375 31.86 4.5 28.5 4.5H19.5C16.14 4.5 13.0425 6.6375 10.7794 10.5169C8.66438 14.1413 7.5 18.9375 7.5 24C7.5 29.0625 8.66438 33.8588 10.7794 37.4831C13.0425 41.3625 16.14 43.5 19.5 43.5H28.5C31.86 43.5 34.9575 41.3625 37.2206 37.4831C39.3356 33.8588 40.5 29.0625 40.5 24C40.5 18.9375 39.3356 14.1413 37.2206 10.5169ZM37.4606 22.5H31.4606C31.3434 19.4219 30.7306 16.3829 29.6456 13.5H35.3812C36.5287 16.0088 37.2862 19.125 37.4606 22.5ZM33.5981 10.5H28.2113C27.5847 9.4131 26.8293 8.40581 25.9613 7.5H28.5C30.375 7.5 32.1375 8.625 33.5981 10.5ZM28.5 40.5H25.9669C26.8349 39.5942 27.5903 38.5869 28.2169 37.5H33.6038C32.1375 39.375 30.375 40.5 28.5 40.5ZM35.3812 34.5H29.6475C30.7324 31.6171 31.3453 28.5781 31.4625 25.5H37.4625C37.2863 28.875 36.5287 31.9912 35.3812 34.5Z'
							fill='#0BA5EC'
						/>
					</svg>
					Anywhere
				</span>
			),
			desc: 'Set up an account either as an agent or business and complete your profile to enable you send and receive money.',
		},
		{
			title: <span></span>,
			desc: 'Set up an account either as an agent or business and complete your profile to enable you send and receive money.',
		},
		{
			title: <span></span>,
			desc: 'Set up an account either as an agent or business and complete your profile to enable you send and receive money.',
		},
		{
			title: <span></span>,
			desc: 'Set up an account either as an agent or business and complete your profile to enable you send and receive money.',
		},
	]
	return (
		<div className={s.create}>
			<section className={s['create-top']}>
				<div>move money, seamlessly!</div>
				<h1 data-animation='titles'>
					<span>
						Create an
						<svg
							width='34'
							height='40'
							viewBox='0 0 34 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M30.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V36.5C0.5 37.2957 0.81607 38.0587 1.37868 38.6213C1.94129 39.1839 2.70435 39.5 3.5 39.5H30.5C31.2956 39.5 32.0587 39.1839 32.6213 38.6213C33.1839 38.0587 33.5 37.2957 33.5 36.5V3.5C33.5 2.70435 33.1839 1.94129 32.6213 1.37868C32.0587 0.81607 31.2956 0.5 30.5 0.5ZM11 5H23C23.3978 5 23.7794 5.15804 24.0607 5.43934C24.342 5.72064 24.5 6.10218 24.5 6.5C24.5 6.89782 24.342 7.27936 24.0607 7.56066C23.7794 7.84196 23.3978 8 23 8H11C10.6022 8 10.2206 7.84196 9.93934 7.56066C9.65804 7.27936 9.5 6.89782 9.5 6.5C9.5 6.10218 9.65804 5.72064 9.93934 5.43934C10.2206 5.15804 10.6022 5 11 5ZM26.9019 33.2C26.7442 33.3185 26.5648 33.4047 26.3738 33.4538C26.1828 33.5028 25.984 33.5137 25.7887 33.4859C25.5935 33.458 25.4057 33.3919 25.236 33.2914C25.0664 33.1908 24.9182 33.0579 24.8 32.9C23.8918 31.6891 22.7142 30.7063 21.3603 30.0293C20.0065 29.3524 18.5136 29 17 29C15.4864 29 13.9935 29.3524 12.6397 30.0293C11.2858 30.7063 10.1082 31.6891 9.2 32.9C9.08181 33.0576 8.93374 33.1903 8.76424 33.2907C8.59474 33.3911 8.40714 33.4571 8.21213 33.4849C8.01713 33.5128 7.81855 33.502 7.62773 33.4531C7.43691 33.4042 7.25759 33.3182 7.1 33.2C6.94241 33.0818 6.80965 32.9337 6.70929 32.7642C6.60893 32.5947 6.54293 32.4071 6.51508 32.2121C6.48722 32.0171 6.49804 31.8186 6.54693 31.6277C6.59582 31.4369 6.68181 31.2576 6.8 31.1C8.12822 29.3192 9.89942 27.9171 11.9375 27.0331C10.8206 26.0134 10.0381 24.6798 9.69262 23.2074C9.34719 21.7349 9.45498 20.1925 10.0019 18.7824C10.5487 17.3723 11.5091 16.1606 12.757 15.3061C14.0049 14.4516 15.482 13.9944 16.9944 13.9944C18.5068 13.9944 19.9838 14.4516 21.2317 15.3061C22.4796 16.1606 23.44 17.3723 23.9869 18.7824C24.5338 20.1925 24.6416 21.7349 24.2961 23.2074C23.9507 24.6798 23.1682 26.0134 22.0513 27.0331C24.0934 27.9155 25.8687 29.3177 27.2 31.1C27.4389 31.418 27.5417 31.8179 27.4858 32.2117C27.4299 32.6055 27.2198 32.961 26.9019 33.2ZM21.5 21.5C21.5 22.39 21.2361 23.26 20.7416 24.0001C20.2471 24.7401 19.5443 25.3169 18.7221 25.6575C17.8998 25.9981 16.995 26.0872 16.1221 25.9135C15.2492 25.7399 14.4474 25.3113 13.818 24.682C13.1887 24.0526 12.7601 23.2508 12.5865 22.3779C12.4128 21.505 12.5019 20.6002 12.8425 19.7779C13.1831 18.9557 13.7599 18.2529 14.4999 17.7584C15.24 17.2639 16.11 17 17 17C18.1935 17 19.3381 17.4741 20.182 18.318C21.0259 19.1619 21.5 20.3065 21.5 21.5Z'
								fill='#0BA5EC'
							/>
						</svg>
						Account
					</span>
				</h1>
				<p data-animation='paragraphs'>
					Set up an account either as an agent or business and complete your profile to
					enable you send and receive money.
				</p>
			</section>

			<div className={s['create-main']}></div>
		</div>
	)
}

export default Create
