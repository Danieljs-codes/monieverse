import FrontLayout from '~/layout'
import Hero from '~/components/home/hero'
import Faq from '~/components/home/faq'
import Expand from '~/components/home/expand'
import Create from '~/components/home/create'
import Global from '~/components/home/global'

const HomePage = () => {
	return (
		<FrontLayout page='home'>
			<Hero />
			<Create />
			<Global />
			<Expand />
			<Faq />
		</FrontLayout>
	)
}

export default HomePage
