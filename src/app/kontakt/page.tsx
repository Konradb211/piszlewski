import Baner from "../../../components/About/Baner"
import Faq from "../../../components/Faq"
import Form from "../../../components/Kontakt/Form"
import Map from "../../../components/Kontakt/Map"

const page = () => {
	return (
		<>
			<Baner />
			<Form />
			<Map />
			<Faq />
			<div className='pb-10' />
		</>
	)
}

export default page
