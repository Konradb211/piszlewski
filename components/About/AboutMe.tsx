import Image from "next/image"
import React from "react"
import Title from "../Title"

const AboutMe = () => {
	return (
		<div className='flex gap-10 py-9 wrapper px-4'>
			<div className='flex-1/2'>
				<Title>trochę o mnie</Title>
				<p>
					Cześć! 🙋🏼‍♂️Mam na imię Kacper, mam 23 lata i od ponad czterech lat z
					pasją zajmuję się auto detailingiem. Zaczynałem w niewielkim garażu
					przy ulicy Chociszewskiego w Lesznie - to właśnie stamtąd możecie mnie
					kojarzyć z profilu o nazwie PISZLU AUTODETAILING. Przez ten czas
					miałem przyjemność pracować nad setkami samochodów - od codziennych
					aut, przez klasyki, aż po luksusowe modele. Każdy projekt traktuję
					indywidualnie, a zadowolenie klientów i ich powroty są dla mnie
					największym dowodem jakości mojej pracy.
				</p>
			</div>
			<div className='flex-1/2'>
				<Image
					src='/images/about/aboutMe.webp'
					alt='O mnie'
					width={728}
					height={373}
					className='rounded-[10px]'
				/>
			</div>
		</div>
	)
}

export default AboutMe
