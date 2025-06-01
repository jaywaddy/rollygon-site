import { z, defineCollection, type CollectionEntry, getCollection } from "astro:content"

const articleCollection = defineCollection({
    type: "content",
    schema: z.object({
        contentType: z.string(),
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
    })
});

const toolCollection = defineCollection({
    type: "content",
    schema: z.object({
        contentType: z.string(),
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        price: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    articles: articleCollection,
    tools: toolCollection,
}

export const ALL_ARTICLES: Array<CollectionEntry<"articles">> = (
	await getCollection("articles")
).sort(
	(olderDate: CollectionEntry<"articles">, newerDate: CollectionEntry<"articles">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const LATEST_ARTICLES: Array<CollectionEntry<"articles">> = [...ALL_ARTICLES].splice(0, 3);

export const ALL_TOOLS: Array<CollectionEntry<"tools">> = (
	await getCollection("tools")
).sort(
	(olderDate: CollectionEntry<"tools">, newerDate: CollectionEntry<"tools">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const LATEST_TOOLS: Array<CollectionEntry<"tools">> = [...ALL_TOOLS].splice(0, 3);
