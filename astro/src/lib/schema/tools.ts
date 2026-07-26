import type { TAsset, TQueryOptions, TSeo } from ".";
import { directus } from "../directus";
import { readItem, readItems } from "@directus/sdk";

export type TTool = {
    blender_version?: string;
    date_created?: Date;
    date_updated?: Date;
    description?: string;
    featured_image?: string;
    file?: string;
    gumroad_download_url?: string;
    id?: string;
    legacy_date_created?: Date;
    price?: number;
    related_models?: TAsset;
    seo?: TSeo;
    slug?: string;
    title?: string;
    youtube_video_url?: string;
};

export async function getTools(options: TQueryOptions): Promise<Array<TTool>> {
    return await directus.request(readItems("tools", options));
}

export async function getToolById(
    id: string,
    options: { fields: string[] },
): Promise<TTool> {
    return await directus.request(readItem("tools", id, options));
}
