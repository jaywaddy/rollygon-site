import type { TCta } from "@lib/utils/types";

export type TBanner = {
	cta: TCta;
	display: boolean;
	label: string;
	varient: "auto-hide" | "constant" | "manual-hide";
};

const banner: TBanner = {
	cta: {
		href: "/tools",
		icon: "new",
		label: "Download Latest Tool",
	},
	display: true,
	label: "New tools available for download!",
	varient: "auto-hide",
};

export default banner;
