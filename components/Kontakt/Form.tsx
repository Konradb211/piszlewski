import AnimatedOnScroll from "../AnimatedOnScroll"

const Form = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start wrapper pt-8 md:pt-16 md:gap-5 gap-8 pb-16 px-4'>
			<div className='md:max-w-[600px] max-w-full w-full'>
				<AnimatedOnScroll animation='animate__fadeInUp'>
					<h2 className='text-4xl font-bold uppercase pb-2'>
						Skontaktuj się ze mną!
					</h2>
				</AnimatedOnScroll>
				<p>
					Jeśli chcesz dowiedzieć się więcej o moich usługach lub umówić się na
					bezpłatną wycenę, zadzwoń lub wypełnij formularz kontaktowy!
				</p>
				<div className='flex md:flex-col flex-row flex-wrap gap-4 pt-4'>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<a href='tel:603567003' className='black-tel flex-1'>
							603 567 003
						</a>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<a
							href='mailto:kontakt@twojadomena.pl'
							className='black-mail flex-1'>
							piszlu@piszlu.pl
						</a>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<p className='black-loc'>ul. Braci Grimm, Święciechowa</p>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<a
							href='https://www.facebook.com/carismaticbypiszlu/'
							className='black-fb flex-1'>
							carismaticbypiszlu
						</a>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<a
							href='https://www.instagram.com/carismatic_detailing/'
							className='black-insta flex-1'>
							carismatic_detailing
						</a>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<a href='carismatic_detailing' className='black-tt flex-1'>
							https://www.tiktok.com/@carismatic_detailing
						</a>
					</AnimatedOnScroll>
				</div>
			</div>
			<div className='md:max-w-[600px] max-w-full w-full'>
				<AnimatedOnScroll animation='animate__fadeInUp'>
					<h2 className='text-2xl font-bold uppercase pb-2'>
						Formularz kontaktowy
					</h2>
				</AnimatedOnScroll>
				<form action='' className='flex flex-col gap-2'>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<div className='flex gap-2'>
							<input
								className='w-full p-3 border border-[#203621] rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
								id='names'
								name='names'
								type='text'
								placeholder='Imię'
							/>

							<input
								className='w-full p-3 border border-[#203621] rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
								id='surname'
								name='surname'
								type='text'
								placeholder='Nazwisko'
							/>
						</div>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<div className='flex gap-2'>
							<input
								className='w-full p-3 border border-[#203621] rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
								id='phone'
								name='phone'
								type='text'
								placeholder='Numer telefonu'
							/>
							<input
								className='w-full p-3 border border-[#203621] rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
								id='email'
								name='email'
								type='text'
								placeholder='Adres E-mail'
							/>
						</div>
					</AnimatedOnScroll>
					<AnimatedOnScroll animation='animate__fadeInUp'>
						<textarea
							className='w-full h-32 p-3 border border-[#203621] rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							placeholder='Wpisz wiadomość...'></textarea>
					</AnimatedOnScroll>

					<AnimatedOnScroll className='flex' animation='animate__fadeInUp'>
						<button
							type='submit'
							className='bg-[#203621] text-white py-3 px-9 rounded-md cursor-pointer'>
							Wyślij
						</button>
					</AnimatedOnScroll>
				</form>
			</div>
		</div>
	)
}

export default Form
