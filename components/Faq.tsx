"use client"
import { useState } from "react"
import { faq } from "../constants/faq"
import Title from "./Title"
import Image from "next/image"
import BeforeAfter from "./BeforeAfter"
import AnimatedOnScroll from "./AnimatedOnScroll"

const Faq = () => {
	const [openIndex, setOpenIndex] = useState<null | number>(null)

	const handleContentClick = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='wrapper pt-20 px-4'>
			<div className='flex flex-col md:flex-row items-center md:items-start gap-5 justify-between w-full'>
				<div className='flex flex-col gap-2 md:max-w-1/2 max-w-full'>
					<Title>Faq</Title>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<p className='font-bold pb-2'>
							Zanim umówisz usługę – sprawdź najczęściej zadawane pytania o
							detailingu i pielęgnacji auta
						</p>
					</AnimatedOnScroll>
					{faq.map((item, index) => (
						<AnimatedOnScroll key={index} animation='animate__fadeInUp'>
							<div
								className='border-1 border-[#dbdbdb] rounded-[10px] p-4 cursor-pointer'
								onClick={() => handleContentClick(index)}>
								<div
									className='flex justify-between
								 '>
									<h2 className='font-bold'>{item.title}</h2>
									<Image
										className={openIndex === index ? "rotate-90" : ""}
										src='/icons/faq-arrow.svg'
										alt='FAQ Placeholder'
										width={12}
										height={12}
									/>
								</div>
								{openIndex === index && (
									<div className='pt-2'>
										<p>{item.content}</p>
									</div>
								)}
							</div>
						</AnimatedOnScroll>
					))}
				</div>
				<div className='md:max-w-1/2 max-w-full'>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<BeforeAfter
							beforeSrc='/images/beforeAfter/before.webp'
							afterSrc='/images/beforeAfter/after.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
					</AnimatedOnScroll>
					<Image src='' alt='placeholder' width={564} height={0} />
				</div>
			</div>
		</div>
	)
}

export default Faq
