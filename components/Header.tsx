import Button from "./Button"

const Header = () => {
	return (
		<div className='relative h-screen w-full overflow-hidden'>
			<video
				src='/video/video.mp4'
				autoPlay
				loop
				muted
				playsInline
				className='absolute top-0 left-0 w-full h-full object-cover'
			/>

			<div className='absolute inset-0 bg-black/65'></div>

			<div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
				<h1 className='text-5xl md:text-7xl font-bold mb-4'>
					robie fajne rzeczy czasem
				</h1>
				<p className='text-lg md:text-2xl mb-6 max-w-2xl'>
					Jakiś opis by sie przydał
				</p>
				<Button
					href='https://www.instagram.com/carismatic_detailing/'
					className='bg-[#203621] text-white'>
					zobacz więcej
				</Button>
			</div>
		</div>
	)
}

export default Header
