import Image from "next/image"
import Title from "./Title"
import { realizations } from "../constants/realizations"

const Realizations = () => {
	const [r1, r2, r3, r4, r5, r6, r7, r8, r9] = realizations

	return (
		<div className='wrapper pt-20 pb-20 px-4'>
			<Title>Przykładowe realizacje</Title>

			{/* MOBILE / TABLET – masonry */}
			<div className='lg:hidden columns-1 sm:columns-2 gap-4 [column-gap:1rem] mt-6'>
				{realizations.map((item, i) => (
					<div
						key={i}
						className='break-inside-avoid mb-4 overflow-hidden rounded-xl'>
						<Image
							src={item.src}
							alt={item.alt}
							width={800}
							height={600}
							className='w-full h-auto object-cover'
							sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px'
						/>
					</div>
				))}
			</div>

			<div className='hidden lg:flex gap-4 justify-center mt-6'>
				<div className='flex flex-col gap-4 w-full lg:w-1/3 max-h-[773px]'>
					<Image
						src={r9.src}
						alt={r9.alt}
						width={319}
						height={0}
						className='w-full h-full rounded-xl object-cover'
					/>
					<Image
						src={r3.src}
						alt={r3.alt}
						width={319}
						height={173}
						className='w-full h-full rounded-xl object-cover'
					/>
					<Image
						src={r7.src}
						alt={r7.alt}
						width={319}
						height={290}
						className='w-full h-full rounded-xl object-cover'
					/>
				</div>

				<div className='flex flex-col gap-4 justify-center w-full lg:w-1/3'>
					<Image
						src={r8.src}
						alt={r8.alt}
						width={506}
						height={502}
						className='w-full h-full rounded-xl object-cover'
					/>
					<div className='flex gap-4'>
						<Image
							src={r1.src}
							alt={r1.alt}
							width={239}
							height={256}
							className='w-full h-full rounded-xl object-cover'
						/>
						<Image
							src={r2.src}
							alt={r2.alt}
							width={239}
							height={256}
							className='w-full h-full rounded-xl object-cover'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-4 w-full lg:w-1/3'>
					<div className='flex gap-4'>
						<Image
							src={r6.src}
							alt={r6.alt}
							width={239}
							height={256}
							className='w-full h-full rounded-xl object-cover'
						/>
						<Image
							src={r4.src}
							alt={r4.alt}
							width={239}
							height={256}
							className='w-full h-full rounded-xl object-cover'
						/>
					</div>
					<Image
						src={r5.src}
						alt={r5.alt}
						width={506}
						height={502}
						className='w-full h-full rounded-xl object-cover'
					/>
				</div>
			</div>
		</div>
	)
}

export default Realizations
