import type { TAsset, TSeo } from ".";
import { directus } from "../directus";
import { readItem } from "@directus/sdk";

export type TModel = {
    blender_version?: string;
    body?: string; // Needs attention
    date_created?: Date;
    date_updated?: Date;
    description?: string;
    featured_image?: string;
    file?: string;
    id?: string;
    legacy_date_created?: Date;
    price?: number;
    related_tools?: TAsset;
    seo?: TSeo;
    sketchfab_model_url?: string;
    slug?: string;
    title?: string;
    quads?: number;
    tris?: number;
    updates?: TAsset[];
    verts?: number;
    youtube_video_url?: string;
};

export async function getModelById(
    id: string,
    options: { fields: any[] },
): Promise<TModel> {
    return await directus.request(readItem("models", id, options));
}
