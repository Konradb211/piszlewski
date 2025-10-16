import Image from "next/image"
import Button from "./Button"
import Title from "./Title"

const Instagram = () => {
	return (
		<section className='wrapper px-4 py-12'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
				<div className='w-full'>
					<div className='relative'>
						<div className='grid grid-cols-2 gap-3 sm:gap-4 lg:block lg:relative lg:h-[520px]'>
							<div className='relative aspect-square rounded-xl overflow-hidden lg:absolute lg:top-0 lg:left-0 lg:w-[320px] lg:h-[320px] shadow-xl'>
								<Image
									src='/images/image-1.png'
									alt='Instagram 1'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 50vw, 320px'
									priority={false}
								/>
							</div>

							<div className='relative aspect-square rounded-xl overflow-hidden lg:absolute lg:top-6 lg:left-[340px] lg:w-[180px] lg:h-[180px] shadow-lg'>
								<Image
									src='/images/image-3.png'
									alt='Instagram 2'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 50vw, 180px'
								/>
							</div>

							<div className='relative aspect-square rounded-xl overflow-hidden lg:absolute lg:bottom-12 lg:left-10 lg:w-[220px] lg:h-[220px] shadow-lg'>
								<Image
									src='/images/image-2.png'
									alt='Instagram 3'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 50vw, 220px'
								/>
							</div>

							<div className='relative aspect-square rounded-xl overflow-hidden lg:absolute lg:bottom-0 lg:left-[260px] lg:w-[260px] lg:h-[260px] shadow-xl'>
								<Image
									src='/images/image-4.png'
									alt='Instagram 4'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 50vw, 260px'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full'>
					<Title>ZAJRZYJ NA INSTAGRAMA!</Title>
					<p className='pb-6 sm:pb-8 text-base leading-relaxed'>
						To właśnie tam pokazuję efekty mojej pracy, kulisy realizacji i
						przemiany aut przed i po detailingu. Znajdziesz tam rolki, zdjęcia i
						relacje z codziennej pracy w studiu – od klasyków po najnowsze
						modele. Wpadnij i zobacz, co dziś stoi u mnie w garażu!
					</p>
					<Button className='bg-[#203621] text-white'>
						DOWIEDZ SIĘ WIĘCEJ
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Instagram
