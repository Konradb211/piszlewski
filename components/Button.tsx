import { ReactNode } from "react"

type ButtonProps = {
	children: ReactNode
	className: string
}

const Button = ({ children, className }: ButtonProps) => {
	return (
		<button
			className={`${className} uppercase cursor-pointer rounded-md py-3 px-4`}>
			{children}
		</button>
	)
}

export default Button
