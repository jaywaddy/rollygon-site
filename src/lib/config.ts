import Banner, { type TBanner } from "./base/banner";
import Brand, { type TBrand } from "./base/brand";
import Navigation, { type TNavigation } from "./base/navigation";
import Services, { type TPricePlan } from "@lib/ext/services/lib/services";
import Utils, { type TUtils } from "./utils/utils";

type TDev = {
	enableGrid: boolean;
	hidePage: boolean;
	showGridLines: boolean;
	showLayouts: boolean;
};

export type TGlobalConfig = {
	banner: TBanner;
	brand: TBrand;
	dev: TDev;
	navigation: TNavigation;
	services: TPricePlan[] | [];
	utils: TUtils;
};

const globalConfig: TGlobalConfig = {
	banner: Banner,
	brand: Brand,
	dev: {
		enableGrid: false,
		hidePage: false,
		showGridLines: true,
		showLayouts: true,
	},
	services: Services,
	navigation: Navigation,
	utils: Utils,
};

export default globalConfig;
