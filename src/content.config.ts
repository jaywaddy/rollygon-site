import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, getCollection } from "astro:content";

export const modelsCollection = await getCollection("models");
export const streamsCollection = await getCollection("streams");
export const toolsCollection = await getCollection("tools");

export const allCollections = [
	toolsCollection,
	modelsCollection,
	streamsCollection,
	//
];

const globPattern = ["**/*.md", "!_template/*.md"];

const collectionSchema = {
	title: z.string(),
	metaTitle: z.string().optional(),
	canonicalUrl: z.string().optional(),
	dateCreated: z.date(),
	dateUpdated: z.date().optional(),
	description: z.string(),
	metaDescription: z.string().optional(),
	slug: z.string().optional(),
	draft: z.boolean().default(false),

	models: z.array(z.string()).optional(),
	streams: z.array(z.string()).optional(),
	tools: z.array(z.string()).optional(),

	sketchfabUrl: z.string().optional(),
	youtubeUrl: z.string().optional(),

	plural: z.string().optional(),
	singular: z.string().optional(),
};

const models = defineCollection({
	loader: glob({
		base: "./src/content/models",
		pattern: globPattern,
	}),
	schema: ({ image }) => {
		return z.object({
			...collectionSchema,
			thumbnail: image().optional(),

			size: z.string().optional(),
			version: z.string().optional(),
			verts: z.string().optional(),
			tris: z.string().optional(),
			quads: z.string().optional(),

			plural: z.string().default("models"),
			singular: z.string().default("model"),
		});
	},
});

const streams = defineCollection({
	loader: glob({
		base: "./src/content/streams",
		pattern: globPattern,
	}),
	schema: ({ image }) => {
		return z.object({
			...collectionSchema,
			thumbnail: image().optional(),

			collection: z.string(),

			plural: z.string().default("streams"),
			singular: z.string().default("stream"),
		});
	},
});

const tools = defineCollection({
	loader: glob({
		base: "./src/content/tools",
		pattern: globPattern,
	}),
	schema: ({ image }) => {
		return z.object({
			...collectionSchema,
			thumbnail: image().optional(),

			downloadLink: z.string().optional(),
			price: z.number().optional(),
			size: z.string().optional(),
			version: z.string().optional(),

			plural: z.string().default("tools"),
			singular: z.string().default("tool"),
		});
	},
});

export const collections = { models, streams, tools };
