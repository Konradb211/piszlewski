import Image from "next/image"
import React from "react"
import Title from "../Title"

const AboutMe = () => {
	return (
		<section className='wrapper mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16'>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-14'>
				<div className='order-1'>
					<Title>trochę o mnie</Title>
					<p className='mt-4 text-base sm:text-lg leading-relaxed'>
						Cześć! 🙋🏼‍♂️Mam na imię Kacper, mam 23 lata i od ponad czterech lat z
						pasją zajmuję się auto detailingiem. Zaczynałem w niewielkim garażu
						przy ulicy Chociszewskiego w Lesznie - to właśnie stamtąd możecie
						mnie kojarzyć z profilu o nazwie PISZLU AUTODETAILING. Przez ten
						czas miałem przyjemność pracować nad setkami samochodów - od
						codziennych aut, przez klasyki, aż po luksusowe modele. Każdy
						projekt traktuję indywidualnie, a zadowolenie klientów i ich powroty
						są dla mnie największym dowodem jakości mojej pracy.
					</p>
				</div>

				<div className='order-2'>
					<div className='relative w-full overflow-hidden rounded-xl shadow-2xl'>
						<Image
							src='/images/about/aboutMe.webp'
							alt='O mnie'
							width={1200}
							height={700}
							className='h-auto w-full object-cover'
							sizes='(max-width: 1024px) 100vw, 50vw'
							priority={false}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
