"use client"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import "animate.css"

export default function AnimatedOnScroll({
	children,
	animation = "animate__fadeInUp",
	className = "",
}) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (inView) setIsVisible(true)
	}, [inView])

	return (
		<div
			ref={ref}
			className={`${className} ${
				isVisible ? `animate__animated ${animation}` : "opacity-0"
			}`}>
			{children}
		</div>
	)
}
