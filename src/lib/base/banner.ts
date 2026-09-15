import type { TCta } from "@lib/utils/types";

export type TBanner = {
	cta: TCta;
	display: boolean;
	label: string;
	varient: "auto-hide" | "constant" | "manual-hide";
};

const banner: TBanner = {
	cta: {
		href: "/tools/b-and-m-track-generator",
		icon: "flame",
		label: "Download Most Popular Tool",
	},
	display: true,
	label: "Free tools available for download!",
	varient: "auto-hide",
};

export default banner;
