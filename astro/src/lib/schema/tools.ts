import type { TAsset, TSeo } from ".";
import { directus } from "../directus";
import { readItem } from "@directus/sdk";

export type TTools = {
    blender_version: string;
    date_created: Date;
    date_updated: Date;
    description?: string;
    featured_image?: string;
    file: string;
    gumroad_download_url: string;
    id: string;
    legacy_date_created?: Date;
    price?: number;
    related_models: TAsset;
    seo: TSeo;
    slug: string;
    title: string;
    youtube_video_url: string;
};

export async function getTool(id: string) {
    return (await directus.request(
        readItem("tools", id, {
            fields: [
                "id",
                "featured_image",
                "title",
                "slug",
                "description",
                "seo",
                "file",
                "blender_version",
                "price",
                "gumroad_download_url",
                "youtube_video_url",
                "date_created",
                "date_updated",
                "legacy_date_created",
                "related_models",
                "body",
            ],
        }),
    )) as unknown as TTools;
}
