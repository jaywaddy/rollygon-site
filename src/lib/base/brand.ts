import type { TCta } from "@lib/utils/types";
import type { TButton } from "@components/ui/Button.astro";

export type TBrand = {
	bio?: string;
	contact: {
		description?: string;
		cta?: TButton;
		email?: string;
		location?: string;
		phoneNumber?: string;
		timeZone?: string;
		socialLinks?: TCta[];
	};
	favicon: {
		fallback: string;
		svg: string;
	};
	domain: string;
	root: string;
	name: string;
	heading: string;
	subheading: string;
};

const email = "message@rollygon.com";

const brand: TBrand = {
	bio: "3D modeling tools",
	contact: {
		cta: {
			href: `mailto:${email.toLowerCase()}`,
			label: "Contact me",
			icon: "message",
		},
		location: "Sacramento, CA 🇺🇸",
		email: email,
		socialLinks: [
			{
				href: "https://rollygon.gumroad.com/",
				icon: "gumroad",
				label: "Gumroad",
			},
			{
				href: "https://ko-fi.com/rollygon",
				icon: "ko-fi",
				label: "Ko-fi",
			},
			{
				href: "https://sketchfab.com/rollygon",
				icon: "sketchfab",
				label: "Sketchfab",
			},
			{
				href: "https://twitch.tv/rollygon",
				icon: "twitch",
				label: "Twitch",
			},
			{
				href: "https://youtube.com/@rollygon",
				icon: "youtube",
				label: "YouTube",
			},
			// {
			// 	href: `mailto:${email.toLowerCase()}`,
			// 	icon: "at-sign",
			// 	label: "Email",
			// },
		],
	},
	favicon: {
		fallback: "/favicon.ico",
		svg: "/favicon.svg",
	},
	domain: "rollygon.com",
	root: "https://rollygon.com",
	name: "Rollygon.",
	heading: "Free and open sourced modeling tools for Blender.",
	subheading: "So you can build roller coasters out of polygons.",
};

export default brand;
