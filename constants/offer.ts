export interface OfferImage {
	src: string
	alt: string
}

export interface OfferItem {
	title: string
	text: string
	heroSrc: string
	images: OfferImage[]
}

export const offers: OfferItem[] = [
	{
		title: "polerowanie lakieru",
		text: `Profesjonalne polerowanie lakieru (korekta lakieru) przywraca połysk i głębię koloru, 
a także ogranicza widoczność zarysowań i hologramów. Wykonujemy polerowanie samochodu w wariantach: 
korekta 1-etapowa (odświeżenie), 2-etapowa (większa korekcja) i 3-etapowa (maksymalna regeneracja lakieru).`,
		heroSrc: "/images/about/image-about1.webp",
		images: [
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 1" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 2" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 3" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 4" },
		],
	},
	{
		title: "kosmetyka wnętrza",
		text: `Regeneracja reflektorów (polerowanie lamp) przywraca przejrzystość zmatowiałym 
i „pożółkłym” kloszom, poprawiając bezpieczeństwo i wygląd auta. Zabieg zwiększa skuteczność oświetlenia 
i pomaga przejść okresowy przegląd. Polerujemy lampy z zewnątrz i od wewnątrz (gdy to technicznie możliwe), 
komplet lub pojedynczo. Opcjonalnie nakładamy powłokę ceramiczną na lampy dla dłuższej ochrony przed UV i mikrorysami.`,
		heroSrc: "/images/about/image-about1.webp",
		images: [
			{ src: "/images/about/image-about1.webp", alt: "kosmetyka wnętrza 1" },
			{ src: "/images/about/image-about1.webp", alt: "kosmetyka wnętrza 2" },
			{ src: "/images/about/image-about1.webp", alt: "kosmetyka wnętrza 3" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 4" },
		],
	},
	{
		title: "polerowanie lamp",
		text: `Regeneracja reflektorów (polerowanie lamp) przywraca przejrzystość zmatowiałym 
i „pożółkłym” kloszom, poprawiając bezpieczeństwo i wygląd auta. Zabieg zwiększa skuteczność oświetlenia 
i pomaga przejść okresowy przegląd. Polerujemy lampy z zewnątrz i od wewnątrz (gdy to technicznie możliwe), 
komplet lub pojedynczo. Opcjonalnie nakładamy powłokę ceramiczną na lampy dla dłuższej ochrony przed UV i mikrorysami.`,
		heroSrc: "/images/about/image-about1.webp",
		images: [
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lamp 1" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lamp 2" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lamp 3" },
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 4" },
		],
	},
	{
		title: "przygotowanie do sprzedaży",
		text: `Zabezpieczamy karoserię folią ochronną PPF, która chroni przed odpryskami, 
zarysowaniami i agresywną chemią. Aplikujemy powłoki ceramiczne, dzięki którym lakier zyskuje wysoki połysk, 
silną hydrofobowość i łatwość mycia, a brud mniej przywiera. Wykonujemy dechroming — trwałe, estetyczne zaciemnienie 
elementów chromowanych dopasowane do stylu auta. Pracujemy pakietowo (front/newralgiczne strefy/cała karoseria) 
z precyzyjnym dopasowaniem folii.`,
		heroSrc: "/images/about/image-about1.webp",
		images: [
			{
				src: "/images/about/image-about1.webp",
				alt: "przygotowanie do sprzedaży 1",
			},
			{
				src: "/images/about/image-about1.webp",
				alt: "przygotowanie do sprzedaży 2",
			},
			{
				src: "/images/about/image-about1.webp",
				alt: "przygotowanie do sprzedaży 3",
			},
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 4" },
		],
	},
	{
		title: "folie i powłoki ochronne",
		text: `Zabezpieczamy karoserię folią ochronną PPF, która chroni przed odpryskami, 
zarysowaniami i agresywną chemią. Aplikujemy powłoki ceramiczne, dzięki którym lakier zyskuje wysoki połysk, 
silną hydrofobowość i łatwość mycia, a brud mniej przywiera. Wykonujemy dechroming — trwałe, estetyczne 
zaciemnienie elementów chromowanych dopasowane do stylu auta. Pracujemy pakietowo (front/newralgiczne strefy/cała karoseria) 
z precyzyjnym dopasowaniem folii.`,
		heroSrc: "/images/about/image-about1.webp",
		images: [
			{
				src: "/images/about/image-about1.webp",
				alt: "folie i powłoki ochronne 1",
			},
			{
				src: "/images/about/image-about1.webp",
				alt: "folie i powłoki ochronne 2",
			},
			{
				src: "/images/about/image-about1.webp",
				alt: "folie i powłoki ochronne 3",
			},
			{ src: "/images/about/image-about1.webp", alt: "polerowanie lakieru 4" },
		],
	},
]
