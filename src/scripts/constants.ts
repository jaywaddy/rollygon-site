import { ALL_MODELS, ALL_POSTS, ALL_TOOLS, type Collection } from "@/content/config";
import { findContent } from "./utilities";

export const SITE_HEADING = "Welcome!";
export const SITE_SUB_HEADING = "I made a few tools to model faster. These are all the models and the tools!";

export const FEATURED_MODEL = findContent(ALL_MODELS, "poltergeist");
export const FEATURED_TOOLS: Array<Collection> = [
    ALL_TOOLS[0],
    ALL_TOOLS[1],
    ALL_TOOLS[2],
];
export const FEATURED_POSTS: Array<Collection> = [
    findContent(ALL_POSTS, "import-nl2-spline-to-blender"),
    ALL_POSTS[0],
    ALL_POSTS[1]
];

export const SIDEBAR_WIDTH = 360;