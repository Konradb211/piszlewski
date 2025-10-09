import Image from "next/image"
import { aboutRealizations, imagesAbout } from "../../constants/imagesAbout"
import BeforeAfter from "../BeforeAfter"

const AboutImages = () => {
	return (
		<>
			<div className=' flex flex-col wrapper px-4'>
				<div className='flex justify-center items-end gap-5 relative w-full'>
					<p className='absolute w-full right-0 top-0 max-w-[1150px] '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
						laboriosam quam libero temporibus. Quae, dolores optio delectus
						natus officiis est provident cumque veritatis accusantium corporis
						molestias alias modi quo, quidem repellendus earum cum neque
						perferendis, aliquam sint excepturi aperiam nihil. Repudiandae
						expedita in excepturi eveniet amet, pariatur ipsam nemo, tempore
						provident iste enim dolorum consequatur harum blanditiis
						perspiciatis magni quisquam? Eveniet impedit doloremque quam
						voluptatum aperiam ducimus porro dolores laudantium omnis
						perferendis! Adipisci vitae quae vel voluptas culpa repudiandae
						minima officiis, fugit ipsum tenetur repellat velit explicabo
						cupiditate, tempore incidunt quia facere quasi, esse molestias
						eligendi. Ea, nostrum suscipit. Impedit?
					</p>
					{aboutRealizations.map(item => (
						<>
							<Image
								key={item.alt}
								src={item.src}
								alt={item.alt}
								width={339}
								height={283}
								className='w-full'
							/>
						</>
					))}
				</div>
			</div>
			<div className='wrapper pb-24'>
				<p className='w-1/2 pb-12 pt-24'>
					Dziś spełniam kolejne marzenie - otwieram własne studio detailingu,
					będące efektem lat doświadczeń, ciągłego rozwoju i miłości do
					motoryzacji. To nowy rozdział, dzięki któremu wchodzę na jeszcze
					wyższy poziom i mogę oferować Wam jeszcze więcej.
				</p>

				<div className='mx-auto'>
					<div className='flex gap-6'>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
						<BeforeAfter
							beforeSrc='/images/about/aboutMe.webp'
							afterSrc='/images/about/image-about1.webp'
							beforeAlt='Lakier przed korektą'
							afterAlt='Lakier po korekcie'
							initial={50}
							aspectRatio={1}
							radiusClass='rounded-3xl'
							lineColor='#ffffff'
						/>
					</div>
					<Image src='' alt='placeholder' width={564} height={0} />
				</div>
			</div>
		</>
	)
}

export default AboutImages
