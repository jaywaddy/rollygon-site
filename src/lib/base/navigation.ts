import type { TCategory, TCta } from "@lib/utils/types";

export type TNavigation = {
	background: "dynamic" | "static";
	cta: TCta;
	categories: TCategory[];
	position: "left" | "center" | "right";
};

const navigation: TNavigation = {
	background: "static",
	cta: {
		href: "/tools",
		icon: "download",
		label: "Get Free Tools",
	},
	categories: [
		// { href: "/", label: "Home" },
		{
			href: "/tools",
			label: "Tools",
			collection: "tools",
		},
		{
			href: "/models",
			label: "Models",
			collection: "models",
		},
		{
			href: "/resources",
			label: "Resources",
			collection: "resources",
		},
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	],
	position: "center",
};

export default navigation;
