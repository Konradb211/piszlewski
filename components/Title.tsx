import { ReactNode } from "react"
import AnimatedOnScroll from "./AnimatedOnScroll"

type TitleProps = {
	children: ReactNode
	color?: string
}

const Title = ({ children, color = "text-black" }: TitleProps) => {
	return (
		<AnimatedOnScroll animation='animate__fadeInUp'>
			<h2 className={`title pb-4 montserrat-bold ${color}`}>{children}</h2>
		</AnimatedOnScroll>
	)
}

export default Title
