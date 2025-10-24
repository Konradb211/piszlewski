import React from "react"
import Title from "./Title"
import Button from "./Button"
import Image from "next/image"
import Link from "next/link"

const HomeAbout = () => {
	return (
		<section className='relative overflow-hidden '>
			<div className='absolute inset-0  car-img ' />
			<div className='absolute inset-0  bg-[#1B341F] opacity-90 ' />

			<div className='wrapper relative z-10 px-4 py-12 sm:py-14 lg:py-[116px]'>
				<div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-10 lg:gap-16'>
					<div className='flex-shrink-0'>
						<div className='relative w-[220px] sm:w-[260px] lg:w-[310px]'>
							<Image
								src='/images/piszluplaceholder.webp'
								alt='piszlu'
								width={310}
								height={438}
								className='rounded-xl shadow-2xl'
								sizes='(max-width: 640px) 220px, (max-width: 1024px) 260px, 310px'
								priority={false}
							/>
						</div>
					</div>

					<div className='w-full lg:w-1/2 text-white'>
						<Title color='text-white'>trochę o mnie</Title>
						<p className='pt-3 sm:pt-3.5 pb-4 sm:pb-5 leading-relaxed'>
							Nazywam się Kacper i od kilku lat z pasją zajmuję się auto
							detailingiem. Zaczynałem w niewielkim garażu w Lesznie, a dzięki
							zaufaniu klientów mogłem rozwijać swoje umiejętności i tworzyć
							miejsce, które dziś stało się moim drugim domem – nowoczesne
							studio detailingu. Każdy samochód traktuję indywidualnie,
							zwracając uwagę na każdy detal. Dla mnie to nie tylko praca, ale
							sposób, by pokazać, jak wiele można wydobyć z lakieru i wnętrza
							auta. culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<Button
							href='/o-firmie'
							className='uppercase text-white text-[13px] hover:bg-[#203621] hover:border-[#203621] border-2 border-solid'>
							Dowiedz się więcej
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
