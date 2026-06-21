// Strapi native
export type TImage = {
    alternativeText: string;
    documentId: string;
    id: number;
    url: string;
    width: number;
    height: number;
};

// Shared components
export type TLink = {
    href: string;
    image?: TImage;
    imageOnRight?: boolean;
    isButtonLink: boolean;
    isExternal: boolean;
    isUnderlined: boolean;
    label?: string;
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
