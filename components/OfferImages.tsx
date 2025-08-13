import Image from "next/image"
import { offerTypes } from "../constants/homeOffer"
import Link from "next/link"

const OfferImages = () => {
	return (
		<div className='flex justify-between gap-4 pt-[16px]'>
			{offerTypes.map((item, index) => (
				<Link
					href='/'
					key={index}
					className='max-h-full max-w-[268px] w-full h-full flex flex-col offer-container'>
					<div className='relative w-full h-[310px] rounded-t-[10px] overflow-hidden'>
						<Image
							src={item.src}
							alt={item.alt}
							fill
							className='object-cover'
						/>
					</div>
					<div className='bg-[#203621] py-3.5 px-1.5 rounded-b-[10px] h-[70px] flex items-center justify-center'>
						<p className='text-center uppercase text-white text-[16px] tracking-[2%]'>
							{item.text}
						</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default OfferImages
