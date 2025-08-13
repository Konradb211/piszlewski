import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface navTypes {
	name: string
	href: string
	content?: string
	icon?: string | StaticImport
}

export const navItems: navTypes[] = [
	{ name: "Oferta", href: "/oferta" },
	{ name: "O mnie", href: "/o-firmie" },
	{ name: "kontakt", href: "/kontakt" },
]

export const navContact: navTypes[] = [
	{ name: "phone", href: "/", content: "123123123", icon: "/icons/phone.svg" },
	{ name: "facebook", href: "/", icon: "/icons/fb.svg" },
	{ name: "instagram", href: "/", icon: "/icons/insta.svg" },
	{ name: "tiktok", href: "/", icon: "/icons/tiktok.svg" },
]
