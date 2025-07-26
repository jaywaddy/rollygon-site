import { NEW_ARTICLES_COUNT, NEW_TOOLS_COUNT } from "@/scripts/constants";
import { z, defineCollection, type CollectionEntry, getCollection } from "astro:content";

export type Collection = CollectionEntry<"articles" | "tools" | "models">;

const articleCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    })
});

const toolCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        price: z.string(),
        image: z.string(),
        href: z.string(),
        tags: z.array(z.string()),
        version: z.number(),
    })
});

const modelCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        subTitle: z.string(),
        id: z.string(),
        postDate: z.date(),
        description: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    })
});


export const collections = {
    articles: articleCollection,
    tools: toolCollection,
    models: modelCollection
}

export const ALL_ARTICLES: Array<CollectionEntry<"articles">> = (
	await getCollection("articles")
).sort(
	(olderDate: CollectionEntry<"articles">, newerDate: CollectionEntry<"articles">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const LATEST_ARTICLES: Array<CollectionEntry<"articles">> = [...ALL_ARTICLES].splice(0, NEW_ARTICLES_COUNT);

export const ALL_TOOLS: Array<CollectionEntry<"tools">> = (
	await getCollection("tools")
).sort(
	(olderDate: CollectionEntry<"tools">, newerDate: CollectionEntry<"tools">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const LATEST_TOOLS: Array<CollectionEntry<"tools">> = [...ALL_TOOLS].splice(0, NEW_TOOLS_COUNT);

export const ALL_MODELS: Array<CollectionEntry<"models">> = (
	await getCollection("models")
).sort(
	(olderDate: CollectionEntry<"models">, newerDate: CollectionEntry<"models">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const ALL_CONTENT = [
    ...ALL_ARTICLES,
    ...ALL_TOOLS,
    ...ALL_MODELS
];

