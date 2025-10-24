import type { Metadata } from "next"
import "./globals.css"
import "animate.css"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { Montserrat, Nunito } from "next/font/google"

export const metadata: Metadata = {
	title: "Carismatic",
	description: "Car detailing",
}

const nunito = Nunito({
	subsets: ["latin", "latin-ext"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const montserratBold = Montserrat({
	subsets: ["latin", "latin-ext"],
	weight: "700",
})

export const fonts = {
	nunito,
	montserratBold,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={nunito.className}>
			<body>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
