import type { TCta, TDisplay, TImage, TInputField, TSeo, TSocialLink } from ".";
import { directus } from "../directus";
import { readItems } from "@directus/sdk";

export type TGlobalData = {
    id: number;
    logo: TImage;
    favicon_svg: string;
    favicon_fallback?: string;
    copyright_text: string;
    fallback_seo?: TSeo;
    banner_display: TDisplay;
    banner_description: string;
    banner_cta: TCta[];
    nav_position: string;
    nav_links: TCta[];
    nav_cta: TCta[];
    bio?: string;
    social_links?: TSocialLink[];
    contact_form_title: string;
    contact_form_body: string;
    contact_form_input_fields: TInputField[];
    contact_email: string;
    contact_city: string;
};

export async function getGlobalData() {
    return directus.request(
        readItems("global_data", {
            fields: [
                "id",
                "logo.filename_disk",
                "logo.description",
                "favicon_svg",
                "favicon_fallback",
                "copyright_text",
                "fallback_seo",
                "banner_display",
                "banner_description",
                "banner_cta",
                "nav_position",
                "nav_links",
                "nav_cta",
                "bio",
                "social_links",
                "contact_form_title",
                "contact_form_body",
                "contact_form_input_fields",
                "contact_email",
                "contact_city",
            ],
        }),
    ) as unknown as TGlobalData;
}
