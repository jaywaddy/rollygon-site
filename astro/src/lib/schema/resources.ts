import type { TIconName } from "@components/ui/Icon.astro";
import type { TAsset, TQueryOptions, TSeo } from ".";
import { directus } from "../directus";
import { readItem, readItems } from "@directus/sdk";

export type TCategory = "update" | "stream" | "guide" | "article" | "video";

export type TResource = {
    blender_version?: string;
    body?: string; // Needs attention <-----
    categories?: TCategory[];
    date_created?: Date;
    date_updated?: Date;
    description?: string;
    featured_image?: string;
    id?: string;
    legacy_date_created?: Date;
    related_models?: TAsset;
    related_tools?: TAsset;
    seo?: TSeo;
    slug?: string;
    title?: string;
    youtube_video_url?: string;
};

export async function getResources(
    options: TQueryOptions,
): Promise<Array<TResource>> {
    return await directus.request(readItems("resources", options));
}

export async function getResourceById(
    id: string,
    options: { fields: string[] },
): Promise<TResource> {
    return await directus.request(readItem("resources", id, options));
}
