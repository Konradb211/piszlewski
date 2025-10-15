import Image from "next/image"
import Title from "./Title"

const Realizations = () => {
	return (
		<div className='wrapper pt-20 pb-20 px-4'>
			<Title>Przykładowe realizacje</Title>
			<div className='flex gap-4 justify-center '>
				<div className='flex flex-col gap-4 max-w-1/3 w-full max-h-[773px] h-full'>
					<Image
						src='/images/real/real-9.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={277}
						className=' w-full h-full'
					/>
					<Image
						src='/images/real/real-3.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={173}
						className=' w-full h-full'
					/>
					<Image
						src='/images/real/real-7.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={290}
						className=' w-full h-full'
					/>
				</div>
				<div className='flex flex-col gap-4 justify-center max-w-1/3 w-full'>
					<Image
						src='/images/real/real-8.png'
						alt='Zdjęcie nr 1'
						width={506}
						height={502}
						className=' w-full h-full'
					/>
					<div className='flex gap-4 justify-center'>
						<Image
							src='/images/real/real-1.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className=' w-full h-full'
						/>
						<Image
							src='/images/real/real-2.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className=' w-full h-full'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-4 max-w-1/3 w-full'>
					<div className='flex gap-4 justify-center '>
						<Image
							src='/images/real/real-6.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className=' w-full h-full'
						/>
						<Image
							src='/images/real/real-4.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className=' w-full h-full'
						/>
					</div>
					<Image
						src='/images/real/real-5.png'
						alt='Zdjęcie nr 1'
						width={506}
						height={502}
						className=' w-full h-full'
					/>
				</div>
			</div>
		</div>
	)
}

export default Realizations
