import FrontLayout from '~/layout'
import Hero from '~/components/home/hero'
import Faq from '~/components/home/faq'
import Expand from '~/components/home/expand'

const HomePage = () => {
	return (
		<FrontLayout page='home'>
			<Hero />
			<Expand />
			<Faq />
		</FrontLayout>
	)
}

export default HomePage
