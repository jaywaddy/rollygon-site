export type TCta = {
    href: string;
    label: string;
};

export type TDisplay = "visble" | "hidden";

export type TImage = {
    description?: string;
    height?: number;
    id: string;
    width?: number;
};

export type TInputField = {
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
    type: string;
};

export type TSeo = {
    canonical_url: string;
    id: string;
    meta_title: string;
    meta_description: string;
    no_follow: boolean;
    no_index: boolean;
    og_image: string;
    sitemap_change_frequency: string;
    sitemap_priority: number;
};

export type TSocialLink = {
    handle: string;
    platform: string;
    url: string;
};
