import Image from "next/image"
import Button from "./Button"
import Title from "./Title"

const Instagram = () => {
	return (
		<div className='wrapper flex px-4'>
			<div className='flex max-w-1/2 w-full'>
				<div className='h-full w-full'>
					<Image
						src='/images/image-1.png'
						alt='test'
						width={400}
						height={400}
					/>
					<Image
						src='/images/image-3.png'
						alt='test'
						width={174}
						height={173}
						className='pt-5 pl-5'
					/>
				</div>
				<div className='relative h-full w-full'>
					<Image
						src='/images/image-2.png'
						alt='test'
						width={229}
						height={228}
						className='absolute left-5'
					/>
					<Image
						src='/images/image-4.png'
						alt='test'
						width={256}
						height={254}
						className='absolute bottom-10 -left-30'
					/>
				</div>
			</div>
			<div className='max-w-1/2 w-full'>
				<Title>ZAJRZYJ NA INSTAGRAMA! </Title>
				<p className='pb-8'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Button className='bg-[#203621] text-white'>DOWIEDZ SIĘ WIĘCEJ</Button>
			</div>
		</div>
	)
}

export default Instagram
