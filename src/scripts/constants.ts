import type { ICON_NAME } from "@/components/ui/Icon.astro";
import { ALL_MODELS, ALL_POSTS, ALL_TOOLS, type Collection } from "@/content/config";
import { findContent } from "@/scripts/utilities";

export interface HTML {
    class?: string;
}

const SITE_LOGS: Array<Collection> = ALL_POSTS.filter((content) =>
	content.data.tags.includes("Site Log")
);

export const FEATURED_MODEL = findContent(ALL_MODELS, "poltergeist");
export const FEATURED_TOOLS: Array<Collection> = [
    ALL_TOOLS[0],
    ALL_TOOLS[1],
    ALL_TOOLS[2],
];
export const FEATURED_POSTS: Array<Collection> = [
    findContent(ALL_POSTS, "import-nl2-spline-to-blender"),
    SITE_LOGS[0],
    SITE_LOGS[1]
];

export const SOCIAL_LINKS: {[key: string]: { title: string, icon: ICON_NAME, href: string}} = {
    gumroad: { title: "Gumroad", icon: "gumroad", href: "https://rollygon.gumroad.com/" },
    youtube: { title: "YouTube", icon: "youtube", href: "https://youtube.com/@Rollygon" },
    sketchfab: { title: "Sketchfab", icon: "sketchfab", href: "https://sketchfab.com/Rollygon" },
    bluesky: { title: "Bluesky", icon: "bluesky", href: "https://bsky.app/profile/rollygon.com" },
    email: { title: "Message me", icon: "send", href: "mailto:message@rollygon.com" },
}
