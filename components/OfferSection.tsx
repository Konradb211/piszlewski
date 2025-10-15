import React from "react"
import Title from "./Title"
import OfferImages from "./OfferImages"
import Button from "./Button"

const OfferSection = () => {
	return (
		<div className='wrapper px-4'>
			<div>
				<div className='flex justify-between items-center'>
					<Title color='text-black'>moja oferta</Title>
					<Button className='bg-[#203621] text-white'>
						DOWIEDZ SIĘ WIĘCEJ
					</Button>
				</div>

				<p className='text w-3/5 '>
					W Carismatic zajmuję się kompleksową pielęgnacją i ochroną samochodów
					– od polerowania lakieru, przez czyszczenie i pranie wnętrza, aż po
					regenerację reflektorów i aplikację powłok ceramicznych oraz folii
					PPF.Każdy samochód traktuję indywidualnie – dopasowuję zakres prac do
					jego stanu i oczekiwań właściciela.W moim studiu w Lesznie możesz
					odświeżyć lakier, zabezpieczyć karoserię, przygotować auto do
					sprzedaży lub po prostu przywrócić mu wygląd, jakiego dawno nie
					widziałeś. Tutaj liczy się precyzja, jakość i efekt, który widać od
					pierwszego spojrzenia.
				</p>
			</div>
			<OfferImages />
		</div>
	)
}

export default OfferSection
