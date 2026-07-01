import type { StrapiBlock } from "./strapiBlocks";

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
    contactForm: TContactForm;
    header: THeader;
    footer: TFooter;
};

export type TToolData = {
    slug: string;
    title: string;
    description: string;
    publishDate: Date;
    editDate: Date;
    version: number;
    price: number;
    externalLink: TLink;
    isFeatured: boolean;
    featuredModels: TModelCard;
    featuredImage: TImage;
    file: TFile;
    body: StrapiBlock[];
};

export type TModelData = {
    slug: string;
    title: string;
    description: string;
    publishDate: Date;
    editDate: Date;
    modelEmbedID: string;
    featuredTools: TToolCard;
    featuredImage: TImage;
    verticies: number;
    trianlges: number;
    quads: number;
    file: TFile;
    body: StrapiBlock[];
};

export type TArticleData = {
    slug: string;
    title: string;
    description: string;
    publishDate: Date;
    editDate: Date;
    featuredTools: TToolCard;
    featuredModels: TModelCard;
    featuredImage: TImage;
    body: StrapiBlock[];
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

export type TFile = {
    name: string;
    size: number;
};

export type TToolCard = {
    slug: string;
    title: string;
    description: string;
    publishDate: Date;
    editDate: Date;
    version: number;
    price: number;
    featuredImage: TImage;
    file: TFile;
};

export type TModelCard = {
    slug: string;
    title: string;
    description: string;
    publishDate: Date;
    editDate: Date;
    featuredImage: TImage;
    file: TFile;
};

// Layout components
export type TBanner = {
    description: string;
    isVisible: boolean;
    cta: TLink;
};

export type TContactForm = {
    heading: string;
    subheading: string;
};

export type TFooter = {
    groups: TFooterGroup[];
    logo: TLink;
    copyrightText: string;
};

export type TFooterGroup = {
    footerLinks: TLink[];
    title: string;
};

export type THeader = {
    logo: TLink;
    navLinks: TLink[];
    cta: TLink;
    navPosition: "LEFT" | "RIGHT" | "CENTER";
};
