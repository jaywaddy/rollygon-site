import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, getCollection } from "astro:content";
import globalConfig from "@lib/config";
import type YouTubeEmbed from "@components/YouTubeEmbed.astro";

export const toolsCollection = await getCollection("tools");
export const galleryEntries = await getCollection("gallery");

export const allCollections = [
	toolsCollection,
	//
];

const collectionSchema = {
	title: z.string(),
	metaTitle: seoString(50, 60).optional(),
	canonicalUrl: z.string().optional(),
	dateCreated: z.date(),
	dateUpdated: z.date().optional(),
	description: z.string(),
	metaDescription: seoString(60, 160).optional(),
	sketchfabUrl: z.string().optional(),
	YouTubeEmbed: z.string().optional(),
	draft: z.boolean().default(false),

	plural: z.string().optional(),
	singular: z.string().optional(),
};

function seoString(_min: number, _max: number): z.ZodString {
	if (globalConfig.brand) {
		const siteTitleLength = globalConfig.brand.name.length;
		const newMin = _min - siteTitleLength;
		const newMax = _max - siteTitleLength;

		return z.string().min(newMin).max(newMax);
	}

	return z.string();
}

const tools = defineCollection({
	loader: glob({
		base: "./src/content/tools",
		pattern: "**/*.md",
	}),
	schema: ({ image }) => {
		return z.object({
			...collectionSchema,
			downloadLink: z.string().optional(),
			price: z.number().optional(),
			size: z.string().optional(),
			thumbnail: image().optional(),
			version: z.string().optional(),

			plural: z.string().default("tools"),
			singular: z.string().default("tool"),
		});
	},
});

const gallery = defineCollection({
	loader: glob({
		base: "./src/content/gallery",
		pattern: "**/*.md",
	}),
	schema: ({ image }) => {
		return z.object({
			...collectionSchema,
			thumbnail: image().optional(),

			plural: z.string().default("models"),
			singular: z.string().default("model"),
		});
	},
});

export const collections = { tools, gallery };
