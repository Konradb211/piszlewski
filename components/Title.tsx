import { ReactNode } from "react"

type TitleProps = {
	children: ReactNode
	color?: string
}

const Title = ({ children, color = "text-black" }: TitleProps) => {
	return <h2 className={`title pb-4 montserrat-bold ${color}`}>{children}</h2>
}

export default Title
