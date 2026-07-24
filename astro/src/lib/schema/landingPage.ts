import type { TAsset, TCta, TSeo } from ".";
import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export type TLandingPage = {
    cta_buttons: TCta[];
    featured_model: TAsset;
    featured_resources: TAsset[];
    featured_tool: TAsset;
    hero_subtitle: string;
    hero_title: string;
    seo?: TSeo;
    title: string;
};

export async function getLandingPage() {
    return directus.request(
        readItems("landing_page", {
            fields: [
                "title",
                "seo",
                "hero_title",
                "hero_subtitle",
                "cta_buttons",
                "featured_tool",
                "featured_model",
                "featured_resources",
            ],
        }),
    ) as unknown as TLandingPage;
}
