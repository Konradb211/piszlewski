import React from "react"
import { aboutRealizations } from "../../constants/imagesAbout"
import Image from "next/image"
import Title from "../Title"

const Offer = () => {
	return (
		<div className='flex flex-col gap-10 py-14'>
			<div className='wrapper px-4'>
				<div className='flex gap-5'>
					<div className='max-w-1/4 w-full'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-between max-w-3/4 w-full'>
						<div>
							<Title>polerowanie lakieru</Title>
							<p>
								Profesjonalne polerowanie lakieru (korekta lakieru) przywraca
								połysk i głębię koloru, a także ogranicza widoczność zarysowań i
								hologramów. Wykonujemy polerowanie samochodu w wariantach:
								korekta 1-etapowa (odświeżenie), 2-etapowa (większa korekcja) i
								3-etapowa (maksymalna regeneracja lakieru)
							</p>
						</div>
						<div className='flex gap-5'>
							{aboutRealizations.map(item => (
								<div className='max-w-1/3 w-full' key={item.alt}>
									<Image
										src={item.src}
										alt={item.alt}
										width={339}
										height={283}
										className='w-full'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper px-4'>
				<div className='flex gap-5'>
					<div className='max-w-1/4 w-full'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-between max-w-3/4 w-full'>
						<div>
							<Title>kosmetyka wnętrza</Title>
							<p>
								Regeneracja reflektorów (polerowanie lamp) przywraca
								przejrzystość zmatowiałym i „pożółkłym” kloszom, poprawiając
								bezpieczeństwo i wygląd auta. Zabieg zwiększa skuteczność
								oświetlenia i pomaga przejść okresowy przegląd. Polerujemy lampy
								z zewnątrz i od wewnątrz (gdy to technicznie możliwe), komplet
								lub pojedynczo. Opcjonalnie nakładamy powłokę ceramiczną na
								lampy dla dłuższej ochrony przed UV i mikrorysami.
							</p>
						</div>
						<div className='flex gap-5'>
							{aboutRealizations.map(item => (
								<div className='max-w-1/3 w-full' key={item.alt}>
									<Image
										src={item.src}
										alt={item.alt}
										width={339}
										height={283}
										className='w-full'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper px-4'>
				<div className='flex gap-5'>
					<div className='max-w-1/4 w-full'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-between max-w-3/4 w-full'>
						<div>
							<Title>polerowanie lamp</Title>
							<p>
								Regeneracja reflektorów (polerowanie lamp) przywraca
								przejrzystość zmatowiałym i „pożółkłym” kloszom, poprawiając
								bezpieczeństwo i wygląd auta. Zabieg zwiększa skuteczność
								oświetlenia i pomaga przejść okresowy przegląd. Polerujemy lampy
								z zewnątrz i od wewnątrz (gdy to technicznie możliwe), komplet
								lub pojedynczo. Opcjonalnie nakładamy powłokę ceramiczną na
								lampy dla dłuższej ochrony przed UV i mikrorysami.
							</p>
						</div>
						<div className='flex gap-5'>
							{aboutRealizations.map(item => (
								<div className='max-w-1/3 w-full' key={item.alt}>
									<Image
										src={item.src}
										alt={item.alt}
										width={339}
										height={283}
										className='w-full'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper px-4'>
				<div className='flex gap-5'>
					<div className='max-w-1/4 w-full'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-between max-w-3/4 w-full'>
						<div>
							<Title>przygotowanie do sprzedaży</Title>
							<p>
								Zabezpieczamy karoserię folią ochronną PPF, która chroni przed
								odpryskami, zarysowaniami i agresywną chemią. Aplikujemy powłoki
								ceramiczne, dzięki którym lakier zyskuje wysoki połysk, silną
								hydrofobowość i łatwość mycia, a brud mniej przywiera.
								Wykonujemy dechroming — trwałe, estetyczne zaciemnienie
								elementów chromowanych dopasowane do stylu auta. Pracujemy
								pakietowo (front/newralgiczne strefy/cała karoseria) z
								precyzyjnym dopasowaniem folii.
							</p>
						</div>
						<div className='flex gap-5'>
							{aboutRealizations.map(item => (
								<div className='max-w-1/3 w-full' key={item.alt}>
									<Image
										src={item.src}
										alt={item.alt}
										width={339}
										height={283}
										className='w-full'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='wrapper px-4'>
				<div className='flex gap-5'>
					<div className='max-w-1/4 w-full'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-between max-w-3/4 w-full'>
						<div>
							<Title>folie i powłoki ochronne</Title>
							<p>
								Zabezpieczamy karoserię folią ochronną PPF, która chroni przed
								odpryskami, zarysowaniami i agresywną chemią. Aplikujemy powłoki
								ceramiczne, dzięki którym lakier zyskuje wysoki połysk, silną
								hydrofobowość i łatwość mycia, a brud mniej przywiera.
								Wykonujemy dechroming — trwałe, estetyczne zaciemnienie
								elementów chromowanych dopasowane do stylu auta. Pracujemy
								pakietowo (front/newralgiczne strefy/cała karoseria) z
								precyzyjnym dopasowaniem folii.
							</p>
						</div>
						<div className='flex gap-5'>
							{aboutRealizations.map(item => (
								<div className='max-w-1/3 w-full' key={item.alt}>
									<Image
										src={item.src}
										alt={item.alt}
										width={339}
										height={283}
										className='w-full'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Offer
