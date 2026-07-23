import type { TIconName } from "@components/ui/Icon.astro";

export type TAsset = {
    key: string;
    collection: "models" | "resources" | "tools";
};

export type TCta = {
    href?: string;
    label: string;
    icon?: TIconName;
};

export type TDisplay = "visble" | "hidden";

export type TFile = {
    size: number;
};

export type TImage = {
    description?: string;
    height?: number;
    filename_disk: string;
    width?: number;
};

export type TInputField = {
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
    type: TInputFieldType;
};

export type TInputFieldType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "textarea"
    | "time"
    | "url"
    | "week";

export type TModelRef = {
    collection_type: "model";
    date_created: Date;
    description?: string;
    featured_image?: TImage;
    file?: string;
    legacy_date_created?: Date;
    slug: string;
    title: string;
    tris: number;
    quads: number;
    verts: number;
};

export type TResourceRef = {
    body: any; // Needs attention...
    categories: string[];
    collection_type: "resource";
    date_created: Date;
    description?: string;
    featured_image?: TImage;
    file?: string;
    legacy_date_created?: Date;
    slug: string;
    title: string;
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
