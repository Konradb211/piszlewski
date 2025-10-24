import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<div className='bg-[#203621] pt-10 px-4'>
			<div className='wrapper flex flex-col md:flex-row justify-between md:items-start items-center gap-5'>
				<div className='w-full'>
					<Image src='/icons/logo.svg' alt='logo' width={239} height={239} />
				</div>
				<div className='flex w-full justify-between gap-5 md:flex-nowrap flex-wrap'>
					<div>
						<ul className='text-white uppercase'>
							<li className='pb-2'>
								<Link href='/'>oferta</Link>
							</li>
							<li className='pb-2'>
								<Link href='/'>o mnie</Link>
							</li>
							<li>
								<Link href='/'>kontakt</Link>
							</li>
						</ul>
					</div>
					<div className='text-white'>
						<a className='phone pb-5' href='tel:603567003'>
							603 567 003
						</a>
						<p className='location'>ul. Braci Grimm, Święciechowa</p>
					</div>
					<div className='flex flex-col text-white gap-3.5'>
						<h2 className=' uppercase'>Wpadaj na sociale!</h2>
						<Link
							className='link1'
							href='https://www.facebook.com/carismaticbypiszlu/'>
							carismaticbypiszlu
						</Link>
						<Link
							className='link2'
							href='https://www.instagram.com/carismatic_detailing/'>
							carismatic_detailing
						</Link>
						<Link
							className='link3'
							href='https://www.tiktok.com/@carismatic_detailing'>
							carismatic_detailing
						</Link>
					</div>
				</div>
			</div>
			<div className='flex justify-center text-[#ffffff50] pt-5 pb-2 text-center'>
				<a href='syntaxstudio.pl'>sytntaxstudio.pl</a>
			</div>
		</div>
	)
}

export default Footer
