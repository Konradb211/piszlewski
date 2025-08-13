import React from "react"
import Title from "./Title"
import Button from "./Button"
import Image from "next/image"

const HomeAbout = () => {
	return (
		<div className='relative'>
			<div className='absolute -skew-y-2 car-img  h-full w-full rounded-2xl' />
			<div className='absolute inset-0 -skew-y-2 bg-[#1B341F] opacity-[90%] rounded-2xl' />

			<div className=' flex justify-center items-center wrapper relative z-10 py-[116px] gap-50 px-4'>
				<div className=''>
					<Image
						src='/images/piszluplaceholder.webp'
						alt='piszlu'
						width={310}
						height={438}
						className='z-12'
					/>
				</div>
				<div className='w-1/2'>
					<Title color='text-white'>trochę o mnie</Title>
					<p className='text-white pt-2.5 pb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<Button className='uppercase text-white text-[13px] border-2 border-solid'>
						Dowiedz się więcej
					</Button>
				</div>
			</div>
		</div>
	)
}

export default HomeAbout
