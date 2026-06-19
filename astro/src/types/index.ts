// Strapi native
export type TImage = {
	alternativeText: string;
	documentId: string;
	id: number;
	url: string;
};

// Shared components
export type TLink = {
	href: string;
	icon?: TImage;
	iconPosition?: "LEFT" | "RIGHT";
	isButtonLink: boolean;
	isExternal: boolean;
	label: string;
	showIcon: boolean;
	showLabel: boolean;
	style?: "PRIMARY" | "SECONDARY";
};

// Layout components
export type TBanner = {
	description: string;
	isVisible: boolean;
	link: TLink;
};

export type TFooter = {
	groups: TFooterGroup[];
	logo: TLink;
};

export type TFooterGroup = {
	footerLinks: TLink[];
	title: string;
};

export type THeader = {
	logo: TLink;
	navLinks: TLink[];
	cta: TLink;
};
