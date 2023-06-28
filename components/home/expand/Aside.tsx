import s from './expand.module.scss'

export const Aside = () => {
	return (
		<aside className={s.as}>
			<h1 data-animation='paragraphs'>Easy to Use</h1>
			<p data-animation='paragraphs'>
				Regardless of expertise, Monieverse gives you a simplified experience.
			</p>
		</aside>
	)
}
