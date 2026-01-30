import { z, defineCollection, type CollectionEntry, getCollection } from "astro:content";

export type Collection = CollectionEntry<"posts" | "tools" | "models">;

const postCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        postUpdate: z.optional(z.date()),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.optional(z.boolean()),
        embed: z.optional(z.string()),
        next: z.optional(z.string()),
        lastUpdated: z.optional(z.date()),
    })
});

const toolCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        size: z.string(),
        price: z.string(),
        icon: z.string(),
        href: z.string(),
        tags: z.array(z.string()),
        version: z.string(),
        next: z.optional(z.string()),
        lastUpdated: z.optional(z.date()),
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
        size: z.string(),
        modelStats: z.array(z.any()),
        tags: z.array(z.string()),
        lastUpdated: z.optional(z.date()),
    })
});

export const collections = {
    posts: postCollection,
    tools: toolCollection,
    models: modelCollection
}

export const ALL_POSTS: Array<CollectionEntry<"posts">> = (
	await getCollection("posts")
).sort(
	(olderDate: CollectionEntry<"posts">, newerDate: CollectionEntry<"posts">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const ALL_TOOLS: Array<CollectionEntry<"tools">> = (
	await getCollection("tools")
).sort(
	(olderDate: CollectionEntry<"tools">, newerDate: CollectionEntry<"tools">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const ALL_MODELS: Array<CollectionEntry<"models">> = (
	await getCollection("models")
).sort(
	(olderDate: CollectionEntry<"models">, newerDate: CollectionEntry<"models">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const ALL_CONTENT = [
    ...ALL_POSTS,
    ...ALL_TOOLS,
    ...ALL_MODELS
];

export const ALL_TAGS: Array<string> = [...new Set(ALL_CONTENT.map(content => content.data.tags).flat().sort())];