import Image from "next/image"
import { offerTypes } from "../constants/homeOffer"
import Link from "next/link"
import AnimatedOnScroll from "./AnimatedOnScroll"

const OfferImages = () => {
	return (
		<div
			className='
				flex flex-wrap justify-center gap-4 pt-4
			'>
			{offerTypes.map((item, index) => (
				<AnimatedOnScroll
					className='
						flex flex-col offer-container
						transition-transform duration-300 hover:scale-[1.02]
						rounded-[10px] shadow-md

						w-[calc(100%-1rem)]
						sm:w-[calc(50%-0.5rem)]
						lg:w-[calc(20%-0.8rem)]
					'
					key={index}
					animation='animate__fadeInUp'>
					<Link href={item.href}>
						<div className='relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-t-[10px] overflow-hidden'>
							<Image
								src={item.src}
								alt={item.alt}
								fill
								className='object-cover transition-transform duration-500 hover:scale-105'
								sizes='(max-width:1024px) 50vw, 250px'
							/>
						</div>

						<div className='bg-[#203621] py-2.5 px-2 rounded-b-[10px] h-[55px] flex items-center justify-center shadow-md'>
							<p className='text-center uppercase text-white text-[14px] tracking-wide leading-snug'>
								{item.text}
							</p>
						</div>
					</Link>
				</AnimatedOnScroll>
			))}
		</div>
	)
}

export default OfferImages
