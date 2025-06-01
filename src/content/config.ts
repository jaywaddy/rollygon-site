import { z, defineCollection, type CollectionEntry, getCollection } from "astro:content"

const articleCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        postDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    articles: articleCollection,
}

export const ALL_ARTICLES: Array<CollectionEntry<"articles">> = (
	await getCollection("articles")
).sort(
	(olderDate: CollectionEntry<"articles">, newerDate: CollectionEntry<"articles">) =>
		newerDate.data.postDate.valueOf() - olderDate.data.postDate.valueOf(),
);

export const LATEST_ARTICLES: Array<CollectionEntry<"articles">> = [...ALL_ARTICLES].splice(0, 3);

export function calcTagCount(input: string): number {
	return ALL_ARTICLES
        .map((article) => article.data.tags)
        .flat(2)
        .filter(match => input === match).length;
}
