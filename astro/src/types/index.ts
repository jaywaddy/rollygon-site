// API
export type TStrapiResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    };
    meta?: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};

export type TGlobalData = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    publishedAt: string;
    banner: TBanner;
    header: THeader;
    footer: TFooter;
};

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
    buttonSize: "SMALL" | "MEDIUM" | "LARGE";
    buttonStyle: "PRIMARY" | "SECONDARY";
    href: string;
    image?: TImage;
    imageOnRight?: boolean;
    isButtonLink: boolean;
    isExternal: boolean;
    isUnderlined: boolean;
    label?: string;
};

// Layout components
export type TBanner = {
    description: string;
    isVisible: boolean;
    cta: TLink;
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
