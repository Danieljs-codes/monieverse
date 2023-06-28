import FrontLayout from '~/layout'
import Hero from '~/components/home/hero'
import Faq from '~/components/home/faq'
import Expand from '~/components/home/expand'
import Create from '~/components/home/create'

const HomePage = () => {
	return (
		<FrontLayout page='home'>
			<Hero />
			<Create />
			<Expand />
			<Faq />
		</FrontLayout>
	)
}

export default HomePage
