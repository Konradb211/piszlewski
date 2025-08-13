import Image from "next/image"
import Title from "./Title"

const Realizations = () => {
	return (
		<div className='wrapper pt-20 pb-20 px-4'>
			<Title>Przykładowe realizacje</Title>
			<div className='flex gap-4 justify-center'>
				<div className='flex flex-col gap-4'>
					<Image
						src='/images/real/real-9.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={277}
						className='flex-1'
					/>
					<Image
						src='/images/real/real-3.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={173}
						className='flex-1'
					/>
					<Image
						src='/images/real/real-7.png'
						alt='Zdjęcie nr 1'
						width={319}
						height={290}
						className='flex-1'
					/>
				</div>
				<div className='flex flex-col gap-4 justify-center'>
					<Image
						src='/images/real/real-8.png'
						alt='Zdjęcie nr 1'
						width={506}
						height={502}
						className='flex-1'
					/>
					<div className='flex gap-4 justify-center'>
						<Image
							src='/images/real/real-1.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className='flex-1'
						/>
						<Image
							src='/images/real/real-2.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className='flex-1'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-4 justify-center'>
						<Image
							src='/images/real/real-6.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className='flex-1'
						/>
						<Image
							src='/images/real/real-4.png'
							alt='Zdjęcie nr 1'
							width={239}
							height={256}
							className='flex-1'
						/>
					</div>
					<Image
						src='/images/real/real-5.png'
						alt='Zdjęcie nr 1'
						width={506}
						height={502}
						className='flex-1'
					/>
				</div>
			</div>
		</div>
	)
}

export default Realizations
