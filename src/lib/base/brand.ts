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
	domain: string;
	heading: string;
	keywords?: Array<string | undefined>;
	name: string;
	owner?: string;
	root: string;
	subheading: string;
};

const email = "message@rollygon.com";

const brand: TBrand = {
	domain: "rollygon.com",
	root: "https://rollygon.com",
	name: "Rollygon",
	owner: "Jay Waddy",
	heading: "Get Free and open sourced modeling tools for Blender.",
	subheading: "So you can build roller coasters out of polygons.",
	bio: "I'm a solo dev makes free tools to build roller coasters out of polygons",

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
		],
	},

	keywords: [
		"3d",
		"3d modeling",
		"nolimits 2",
		"blender",
		"blender 3d",
		"roller coaster",
		"3d roller coaster",
		"roller coaster model",
		"open source",
		"free download",
		"ride",
		"live stream",
	],
};

export default brand;
