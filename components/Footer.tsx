import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<div className='bg-[#203621] py-10 px-4'>
			<div className='wrapper flex justify-between items-center'>
				<div>
					<Image src='/icons/logo.svg' alt='logo' width={239} height={239} />
				</div>
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
					<Link className='link1' href='/'>
						carismaticbypiszlu
					</Link>
					<Link className='link2' href='/'>
						carismatic_detailing
					</Link>
					<Link className='link3' href='/'>
						carismatic_detailing
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
