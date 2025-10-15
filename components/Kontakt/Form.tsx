const Form = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-start wrapper pt-8 md:pt-16 gap-5 pb-16 px-4'>
			<div className='max-w-[600px] w-full'>
				<h2 className='text-4xl font-bold uppercase pb-2'>
					Skontaktuj się ze mną!
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi.
				</p>
				<div className='flex flex-col gap-4 pt-4'>
					<a href='tel:603567003' className='black-tel'>
						603 567 003
					</a>
					<a href='mailto:kontakt@twojadomena.pl' className='black-mail'>
						piszlu@piszlu.pl
					</a>
					<p className='black-loc'>ul. Braci Grimm, Święciechowa</p>
					<a href='' className='black-fb'>
						piszluFB
					</a>
					<a href='' className='black-insta'>
						piszluINSTA
					</a>
					<a href='' className='black-tt'>
						piszluTIKTOK
					</a>
				</div>
			</div>
			<div className='max-w-[600px] w-full'>
				<h2 className='text-2xl font-bold uppercase pb-2'>
					Formularz kontaktowy
				</h2>
				<form action='' className='flex flex-col gap-2'>
					<div className='flex gap-2'>
						<input
							className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							id='names'
							name='names'
							type='text'
							placeholder='Imię'
						/>
						<input
							className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							id='surname'
							name='surname'
							type='text'
							placeholder='Nazwisko'
						/>
					</div>
					<div className='flex gap-2'>
						<input
							className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							id='phone'
							name='phone'
							type='text'
							placeholder='Numer telefonu'
						/>
						<input
							className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							id='email'
							name='email'
							type='text'
							placeholder='Adres E-mail'
						/>
					</div>
					<div>
						<textarea
							className='w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#203621]'
							placeholder='Wpisz wiadomość...'></textarea>
					</div>
					<div className='flex'>
						<button
							type='submit'
							className='bg-[#203621] text-white py-3 px-9 rounded-md cursor-pointer'>
							Wyślij
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Form
