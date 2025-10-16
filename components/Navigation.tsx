"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { navContact, navItems } from "../constants/navigation"

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : ""
	}, [isMobileMenuOpen])

	const toggleMobileMenu = () => setIsMobileMenuOpen(s => !s)
	const closeMobile = () => setIsMobileMenuOpen(false)

	return (
		<>
			<nav
				className='
          fixed inset-x-0 top-0 z-[9999]
          py-4 px-4
          bg-[rgba(17,25,40,0.55)]
          backdrop-blur-xl backdrop-saturate-150 backdrop-contrast-125 backdrop-brightness-110
          border-b border-white/10
          shadow-2xl
        '>
				<div className='wrapper container mx-auto flex flex-wrap items-center justify-between text-white'>
					{/* Logo */}
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

					{/* BURGER */}
					<div className='lg:hidden'>
						<button
							className='relative ml-auto h-10 w-10 select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all'
							onClick={toggleMobileMenu}
							type='button'
							aria-label='Otwórz menu'
							aria-expanded={isMobileMenuOpen}
							aria-controls='mobile-drawer'>
							<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</span>
						</button>
					</div>

					{/* DESKTOP NAV */}
					<div className='hidden lg:flex lg:w-[59%] lg:justify-between'>
						<ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
							{navItems.map((item, index) => (
								<li
									key={index}
									className='flex items-center gap-x-2 p-1 text-base uppercase text-white'>
									<Link href={item.href} className='flex items-center'>
										{item.name}
									</Link>
								</li>
							))}
						</ul>

						<ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2.5'>
							{navContact.map((item, index) => (
								<li
									key={index}
									className='flex items-center gap-2.5 p-1 text-base uppercase text-white'>
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

			{/* MOBILE DRAWER */}
			<div
				id='mobile-drawer'
				className={`
          fixed left-0 top-0 z-[10000] h-screen w-72
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}

          /* ciemne szkło */
          bg-[rgba(17,25,40,0.55)] bg-clip-padding
          backdrop-blur-xl backdrop-saturate-150 backdrop-contrast-125 backdrop-brightness-110
          border-r border-white/10
          shadow-2xl
          text-white
        `}
				role='dialog'
				aria-modal='true'>
				<div className='flex flex-row items-center border-b border-white/10 pt-4 pb-5 pl-4'>
					<Link
						href='/'
						className='mr-4 block cursor-pointer text-2xl font-bold text-red-600'
						onClick={closeMobile}>
						<Image
							src='icons/logo.svg'
							height={100}
							width={100}
							alt='Carismatic logo'
						/>
					</Link>

					<button
						onClick={closeMobile}
						className='absolute right-4 top-3.5 text-white hover:text-red-500'
						aria-label='Zamknij menu'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-8 w-8'
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

				<ul className='flex h-full flex-col gap-4 p-4 text-white'>
					{navItems.map((item, index) => (
						<li
							key={index}
							className='flex items-center gap-x-2 p-1 text-lg hover:text-red-500'>
							<Link
								href={item.href}
								className='flex items-center uppercase'
								onClick={closeMobile}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{isMobileMenuOpen && (
				<button
					aria-label='Zamknij menu'
					onClick={closeMobile}
					className='fixed inset-0 z-[9999] bg-transparent lg:hidden'
				/>
			)}
		</>
	)
}
