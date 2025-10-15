"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { navContact, navItems } from "../constants/navigation"

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<div>
			<nav className='fixed py-4 px-4 inset-x-0 top-0 z-[9999] backdrop-blur-lg bg-[rgba(17,25,40,0.55)] border-none shadow-2xl border-b [filter:brightness(1.05)_contrast(1.1)_saturate(1.8)]'>
				<div className=' wrapper container flex flex-wrap items-center justify-between mx-auto text-slate-800'>
					<Link
						href='/'
						className='mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl'>
						<Image
							src='icons/logo.svg'
							height={59}
							width={150}
							alt='Carismatic logo'
						/>
					</Link>

					<div className='lg:hidden'>
						<button
							className='relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
							onClick={toggleMobileMenu}
							type='button'>
							<span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-8 h-8'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'></path>
								</svg>
							</span>
						</button>
					</div>

					<div
						className={`fixed top-0 left-0 min-h-screen w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
							isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
						} lg:hidden z-50`}>
						<div className='flex flex-row items-center border-b pb-4'>
							<Link
								href='/'
								className='mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl'>
								<Image
									src='icons/logo.svg'
									height={100}
									width={100}
									alt='Carismatic logo'
								/>
							</Link>
							<button
								onClick={toggleMobileMenu}
								className='absolute top-4 right-4 text-slate-600 hover:text-red-500'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-8 h-8'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<ul className='flex flex-col h-full gap-4 p-4'>
							{navItems.map((item, index) => (
								<li
									key={index}
									className='flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500'>
									<Link
										onClick={() => {
											setIsMobileMenuOpen(false)
										}}
										href={item.href}
										className='flex items-center'>
										{item.name}
									</Link>
								</li>
							))}
							<li className='mt-4'>
								<button className='bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500'>
									Login
								</button>
							</li>
						</ul>
					</div>

					<div className='hidden lg:flex lg:w-[59%] lg:justify-between'>
						<ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
							{navItems.map((item, index) => (
								<li
									key={index}
									className='flex items-center p-1 text-base gap-x-2 text-white uppercase'>
									<Link href={item.href} className='flex items-center'>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2.5'>
							{navContact.map((item, index) => (
								<li
									key={index}
									className='flex items-center p-1 text-base gap-2.5 text-white uppercase'>
									<Link href={item.href} className='flex items-center gap-2.5'>
										<Image
											src={item.icon ?? "/public/logo.svg"}
											alt={`Ikona ${item.name}`}
											width={16}
											height={16}
										/>
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}
