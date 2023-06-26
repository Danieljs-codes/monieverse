import { chunkify, generateKey, replaceText } from '~/utils'
import s from './privacy.module.scss'

const Privacy = () => {
	const list = [
		{
			desc: 'At Monieverse Fintech, we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our financial technology services and visit our website or mobile application ("Services"). By accessing or using our Services, you agree to the terms and conditions of this Privacy Policy.',
		},
		{
			desc: 'At Monieverse Fintech, we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our financial technology services and visit our website or mobile application ("Services"). By accessing or using our Services, you agree to the terms and conditions of this Privacy Policy.',
		},
		{
			title: 'Information We Collect',
			desc: 'We may collect personal information that you provide to us voluntarily, such as your name, contact details, date of birth, social security number, financial information, and other information required to provide you with our Services.',
		},
		{
			title: 'Cookies and Tracking Technologies',
			desc: 'We may use cookies and similar tracking technologies to enhance your user experience and collect information about your preferences and interactions with our Services. You have the option to disable cookies through your browser settings, but this may limit certain features or functionality of our Services.',
		},
		{
			title: 'Use of Information',
			desc: 'We use the collected information to provide, maintain, and improve our Services, including processing transactions, verifying identities, and preventing fraud or other unauthorized activities.',
		},
		{
			title: 'Information Sharing',
			desc: 'We may share your personal information with trusted third parties, including financial institutions, service providers, and regulatory authorities, to facilitate the provision of our Services, comply with legal obligations, or protect our rights and interests.',
		},
		{
			title: 'Data Security',
			desc: 'We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is completely secure, and we cannot guarantee absolute security.',
		},
		{
			desc: 'You are responsible for maintaining the confidentiality of your account information and password. Please notify us immediately if you suspect any unauthorized access or use of your account.',
		},
		{
			title: 'Contact Details',
			desc: 'If you have any questions, comments, concerns, or wish to exercise your rights as outlined in this policy, please do not hesitate to contact us. You can reach us by emailing hello@monieverse.com. We value your feedback and will respond to your inquiries promptly.',
		},
	]

	return (
		<div className={s.privacy}>
			<div className={s['privacy-top']}>
				<h1>Privacy Policy</h1>
				<h2>Policy last updated on June 21st, 2023</h2>
			</div>

			<div className={s['privacy-main']}>
				<ul>
					{chunkify(list, 2, true).map((list) =>
						list.map((item, idx) => (
							<li key={generateKey(idx, item.desc)}>
								<h1>{item.title}</h1>
								<p dangerouslySetInnerHTML={{ __html: replaceText(item.desc) }} />
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	)
}

export default Privacy
