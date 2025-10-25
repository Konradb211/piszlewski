import Link from "next/link"
import { ReactNode } from "react"
import AnimatedOnScroll from "./AnimatedOnScroll"

type ButtonProps = {
	children: ReactNode
	className: string
	href: string
}

const Button = ({ children, className, href }: ButtonProps) => {
	return (
		<AnimatedOnScroll animation='animate__fadeInUp'>
			<Link href={href}>
				<button
					className={` hover:bg-[#164317] uppercase cursor-pointer rounded-md py-3 px-4 ${className}`}>
					{children}
				</button>
			</Link>
		</AnimatedOnScroll>
	)
}

export default Button
