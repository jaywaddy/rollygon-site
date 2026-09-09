import type { TCta } from "@lib/utils/types";

export type TBrand = {
	bio?: string;
	contact: {
		description?: string;
		href?: string;
		label: string;
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
		href: `mailto:${email.toLowerCase()}`,
		label: "Contact me",
		location: "Sacramento, CA 🇺🇸",
		email: email,
		socialLinks: [
			{ href: "/", icon: "youtube", label: "YouTube" },
			{ href: "/", icon: "bluesky", label: "Bluesky" },
			{
				href: `mailto:${email.toLowerCase()}`,
				icon: "at-sign",
				label: "Email",
			},
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
