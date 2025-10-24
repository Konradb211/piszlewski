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
	{
		name: "phone",
		href: "tel:+48603567003",
		content: "603567003",
		icon: "/icons/phone.svg",
	},
	{
		name: "facebook",
		href: "https://www.facebook.com/carismaticbypiszlu/",
		icon: "/icons/fb.svg",
	},
	{
		name: "instagram",
		href: "https://www.instagram.com/carismatic_detailing/",
		icon: "/icons/insta.svg",
	},
	{
		name: "tiktok",
		href: "https://www.tiktok.com/@carismatic_detailing",
		icon: "/icons/tiktok.svg",
	},
]
