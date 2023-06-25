import S from './Preloader.module.scss'

const Preloader = () => {
	return (
		<div className={S.preloader} data-animation='preloader'>
			<h1 data-animation='preloader__text'>
				{[...'Starter'].map((text, index) => (
					<span key={index}>{text}</span>
				))}
			</h1>
		</div>
	)
}

export default Preloader
