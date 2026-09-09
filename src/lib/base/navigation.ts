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
		href: "/",
		icon: "download",
		label: "Get Free Tools",
	},
	categories: [
		{ href: "/", label: "Home" },
		{
			href: "/gallery",
			label: "Gallery",
			collection: "gallery",
			singular: "entry",
			plural: "entries",
		},
		{
			href: "/blog",
			label: "Blog",
			collection: "blog",
			singular: "post",
			plural: "posts",
		},
		{ href: "/pricing", label: "Pricing" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	],
	position: "left",
};

export default navigation;
