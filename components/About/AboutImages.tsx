import Image from "next/image"
import { aboutRealizations } from "../../constants/imagesAbout"
import BeforeAfter from "../BeforeAfter"
import AnimatedOnScroll from "../AnimatedOnScroll"

const AboutImages = () => {
	return (
		<>
			<div className='wrapper px-4'>
				<div className='flex flex-col lg:flex-row gap-5'>
					<AnimatedOnScroll
						className='w-full lg:w-1/4'
						animation='animate__fadeInUp'>
						<Image
							src='/images/about/image-about1.webp'
							alt='Zdjęcie nr 1'
							width={414}
							height={323}
							className='w-full h-auto lg:h-full object-cover rounded-2xl  lg:rounded-none lg:rounded-tr-[161px] '
						/>
					</AnimatedOnScroll>

					<div className='flex flex-col justify-between w-full lg:w-3/4 gap-2'>
						<AnimatedOnScroll animation='animate__fadeInUp'>
							<p className='text-sm sm:text-base leading-relaxed mb-2'>
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
						</AnimatedOnScroll>

						<div className='mt-4 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-4'>
							{aboutRealizations.map(item => (
								<AnimatedOnScroll key={item.alt} animation='animate__fadeInUp'>
									<div className='w-full h-full'>
										<Image
											src={item.src}
											alt={item.alt}
											width={339}
											height={283}
											className='w-full h-full object-cover max-w-[339px] max-h-[283px]'
										/>
									</div>
								</AnimatedOnScroll>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='wrapper pb-24 px-4'>
				<AnimatedOnScroll animation='animate__fadeInUp'>
					<p className='w-full lg:w-1/2 pb-8 lg:pb-12 pt-12 lg:pt-24 text-base sm:text-base leading-relaxed'>
						Dziś spełniam kolejne marzenie - otwieram własne studio detailingu,
						będące efektem lat doświadczeń, ciągłego rozwoju i miłości do
						motoryzacji. To nowy rozdział, dzięki któremu wchodzę na jeszcze
						wyższy poziom i mogę oferować Wam jeszcze więcej.
					</p>
				</AnimatedOnScroll>

				<div className='mx-auto'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch'>
						<AnimatedOnScroll animation='animate__fadeInUp'>
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
						</AnimatedOnScroll>
						<AnimatedOnScroll animation='animate__fadeInUp'>
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
						</AnimatedOnScroll>
						<AnimatedOnScroll animation='animate__fadeInUp'>
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
						</AnimatedOnScroll>
					</div>

					<Image src='' alt='placeholder' width={564} height={0} />
				</div>
			</div>
		</>
	)
}

export default AboutImages
