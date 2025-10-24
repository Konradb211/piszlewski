import React from "react"
import Image from "next/image"
import Title from "../Title"
import { offers } from "../../constants/offer"

const OfferRow = ({
	title,
	text,
	heroSrc,
	images,
}: {
	title: string
	text: string
	heroSrc: string
	images: { src: string; alt: string }[]
}) => {
	return (
		<div className='wrapper px-4'>
			<div className='flex flex-col lg:flex-row gap-5'>
				<div className='w-full lg:w-1/4'>
					<Image
						src={heroSrc}
						alt={`${title} – zdjęcie główne`}
						width={414}
						height={323}
						className='w-full h-auto lg:h-full object-cover rounded-xl'
						sizes='(max-width: 1024px) 100vw, 25vw'
					/>
				</div>

				<div className='w-full lg:w-3/4 flex flex-col justify-between'>
					<div>
						<Title>{title}</Title>
						<p className='mt-2 text-sm sm:text-base leading-relaxed'>{text}</p>
					</div>

					<div className='mt-4 lg:mt-0'>
						<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
							{images.map(img => (
								<div className='w-full' key={img.alt}>
									<Image
										src={img.src}
										alt={img.alt}
										width={339}
										height={283}
										className='w-full h-auto object-cover rounded-xl'
										sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'
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

const Offer = () => {
	return (
		<div id='polerowanie-lakieru' className='flex flex-col gap-10 py-14'>
			{offers.map(item => (
				<OfferRow
					key={item.title}
					title={item.title}
					text={item.text}
					heroSrc={item.heroSrc}
					images={item.images}
				/>
			))}
		</div>
	)
}

export default Offer
