import FrontLayout from '~/layout'
import Hero from '~/components/home/hero'
import Faq from '~/components/home/faq'

const HomePage = () => {
	return (
		<FrontLayout page='home'>
			<Hero />
			<Faq />
		</FrontLayout>
	)
}

export default HomePage
