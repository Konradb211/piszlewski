"use client"

import React, { useState } from "react"
import Image from "next/image"
import Title from "../Title"
import { offers } from "../../constants/offer"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import AnimatedOnScroll from "../AnimatedOnScroll"

type OfferRowProps = {
	title: string
	text: string
	heroSrc: string
	images: { src: string; alt: string }[]
}

const OfferRow = ({ title, text, heroSrc, images }: OfferRowProps) => {
	const [open, setOpen] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0)

	const slides = [
		{ src: heroSrc, alt: `${title} – zdjęcie główne` },
		...images.map(img => ({ src: img.src, alt: img.alt })),
	]

	const handleThumbClick = (idx: number) => {
		setPhotoIndex(idx + 1)
		setOpen(true)
	}

	const handleHeroClick = () => {
		setPhotoIndex(0)
		setOpen(true)
	}

	return (
		<div className='wrapper px-4'>
			<div className='flex flex-col md:flex-row gap-5'>
				<button
					type='button'
					onClick={handleHeroClick}
					className='w-full lg:w-1/4 block group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'>
					<AnimatedOnScroll className='h-full' animation='animate__fadeInUp'>
						<Image
							src={heroSrc}
							alt={`${title} – zdjęcie główne`}
							width={414}
							height={323}
							className='w-full h-auto lg:h-full object-cover rounded-xl transition-transform duration-200 group-hover:scale-[1.03]'
							sizes='(max-width: 1024px) 100vw, 25vw'
						/>
					</AnimatedOnScroll>
				</button>

				<div className='w-full lg:w-3/4 flex flex-col justify-between'>
					<div>
						<Title>{title}</Title>
						<AnimatedOnScroll animation='animate__fadeInUp'>
							<p className='mt-2 mb-2 text-sm sm:text-base leading-relaxed'>
								{text}
							</p>
						</AnimatedOnScroll>
					</div>

					<div className='mt-4 lg:mt-0'>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
							{images.map((img, idx) => (
								<AnimatedOnScroll
									className='h-full'
									key={img.alt}
									animation='animate__fadeInUp'>
									<button
										type='button'
										className='w-full h-full group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
										onClick={() => handleThumbClick(idx)}>
										<Image
											src={img.src}
											alt={img.alt}
											width={339}
											height={283}
											className='w-full h-auto object-cover rounded-xl transition-transform duration-200 group-hover:scale-[1.03]'
											sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'
										/>
									</button>
								</AnimatedOnScroll>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* LIGHTBOX */}
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={photoIndex}
				slides={slides}
			/>
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
