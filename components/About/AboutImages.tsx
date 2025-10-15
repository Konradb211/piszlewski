import Image from "next/image"
import { aboutRealizations } from "../../constants/imagesAbout"
import BeforeAfter from "../BeforeAfter"

const AboutImages = () => {
	return (
		<>
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
							<p>
								To właśnie dzięki wam - moim dotychczasowym klientom - mogę dziś
								zrobić kolejny krok. Wasze zaufanie, dobre słowo i polecenia
								pozwoliły mi rozwinąć skrzydła i dojść do miejsca, o którym
								kiedyś tylko marzyłem. Za to ogromne dziękuję! 🙏🏻 Trzeba tu
								dopisać coś o tym nowym garażu i essa będzie dużo tekstu budowa
								budowa. To właśnie dzięki wam - moim dotychczasowym klientom -
								mogę dziś zrobić kolejny krok. Wasze zaufanie, dobre słowo i
								polecenia pozwoliły mi rozwinąć skrzydła i dojść do miejsca, o
								którym kiedyś tylko marzyłem. Za to ogromne dziękuję! 🙏🏻 Trzeba
								tu dopisać coś o tym nowym garażu i essa będzie dużo tekstu
								budowa budowa.
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
			<div className='wrapper pb-24'>
				<p className='w-1/2 pb-12 pt-24'>
					Dziś spełniam kolejne marzenie - otwieram własne studio detailingu,
					będące efektem lat doświadczeń, ciągłego rozwoju i miłości do
					motoryzacji. To nowy rozdział, dzięki któremu wchodzę na jeszcze
					wyższy poziom i mogę oferować Wam jeszcze więcej.
				</p>

				<div className='mx-auto'>
					<div className='flex gap-6'>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
					</div>
					<Image src='' alt='placeholder' width={564} height={0} />
				</div>
			</div>
		</>
	)
}

export default AboutImages
