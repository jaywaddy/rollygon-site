import { type ICON_NAME } from "@/ui/Icon.astro";
import { ALL_MODELS, ALL_POSTS, ALL_TOOLS, type Collection } from "@/content/config";
import { findContent } from "@/scripts/utilities";

export interface HTML {
    class?: string;
}

// const SITE_LOGS: Array<Collection> = ALL_POSTS.filter((content) =>
// 	content.data.tags.includes("Site Log")
// );

export const FEATURED_MODEL = findContent(ALL_MODELS, "the-dark-knight");

export const FEATURED_TOOLS: Array<Collection> = getFeaturedTools(FEATURED_MODEL) || ALL_TOOLS.slice(0, 3).reverse();

export const FEATURED_POSTS: Array<Collection> = ALL_POSTS.slice(0, 5);

export const SOCIAL_LINK: {[key: string]: { title: string, icon: ICON_NAME, href: string}} = {
    gumroad: { title: "Gumroad", icon: "gumroad", href: "https://rollygon.gumroad.com/" },
    youtube: { title: "YouTube", icon: "youtube", href: "https://youtube.com/@Rollygon" },
    sketchfab: { title: "Sketchfab", icon: "sketchfab", href: "https://sketchfab.com/Rollygon" },
    bluesky: { title: "Bluesky", icon: "bluesky", href: "https://bsky.app/profile/rollygon.com" },
    email: { title: "Email me", icon: "send", href: "mailto:message@rollygon.com" },
}

export function getFeaturedTools(model: Collection): Array<Collection> | null {
    if (model.data.tools) {
        return model.data.tools.map((tool: string) => findContent(ALL_TOOLS, tool));
    }
    
    return null;
}

console.log(FEATURED_MODEL.data)