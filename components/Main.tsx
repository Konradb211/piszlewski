import Faq from "./Faq"
import Header from "./Header"
import HomeAbout from "./HomeAbout"
import Instagram from "./Instagram"
import OfferSection from "./OfferSection"
import Realizations from "./Realizations"
import Separate from "./Separate"

const Main = () => {
	return (
		<main>
			<Header />
			<Separate />
			<OfferSection />
			<Separate />
			<Instagram />
			<HomeAbout />
			<Faq />
			<Realizations />
		</main>
	)
}

export default Main
