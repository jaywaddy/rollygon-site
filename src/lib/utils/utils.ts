import type { TCollection } from "./types";
import { allCollections, streamsCollection } from "@src/content.config";
import { type CollectionEntry } from "astro:content";

type Collection = CollectionEntry<TCollection>;

const utils = {
	calcReadTime,
	calcWordCount,
	capitalize,
	filterCollection,
	findContent,
	findStream,
	formatDate,
	getProjectID,
	setDynamicPage,
	setHref,
	setStreamTitle,
	setWarning,
	slugify,
	sortCollection,
	titleCase,
};

export type TUtils = typeof utils;

function calcReadTime(article: string | undefined): string {
	const wordsPerMinute = 248;

	if (!article) {
		return "0 min. read";
	}

	const output = Math.ceil(calcWordCount(article) / wordsPerMinute);

	return `${output} min. read`;
}

function calcWordCount(input: string): number {
	const cleanInput = input
		.replace(/(^\s*)|(\s*$)/gi, "")
		.replace(/[ ]{2,}/gi, " ")
		.replace(/\n /, "\n");

	return cleanInput.split(" ").length;
}

function capitalize(input: string) {
	return input
		.split("-")
		.map((word) => {
			return word.charAt(0).toUpperCase() + String(word).slice(1);
		})
		.join("");
}

function filterCollection(entries: CollectionEntry<TCollection>[], id: string) {
	return entries.filter((entry) => getProjectID(entry) === id);
}

function findContent(collection: TCollection, id: string) {
	return allCollections[collection].find(
		(content) => getProjectID(content) === id,
	);
}

function findStream(project: string) {
	return streamsCollection.filter(
		(stream) => stream.id.split("/")[0] === project,
	);
}

function formatDate(date: Date, monthFormat?: "short" | "long"): string {
	return new Date(date).toLocaleString("en-US", {
		timeZone: "UTC",
		month: monthFormat || "short",
		day: "2-digit",
		year: "numeric",
	});
}

function getProjectID(
	entry: CollectionEntry<TCollection> | undefined,
	path?: "path",
) {
	if (entry) {
		return path ? entry?.id.split("/")[1] : entry?.id.split("/")[0];
	}

	return "";
}

function setDynamicPage(
	collection: CollectionEntry<TCollection>[],
	name: TCollection,
	id: string,
) {
	return collection.map((resource, index) => {
		const sortedCollection = filterCollection(
			collection,
			getProjectID(resource),
		);
		const firstIndex = collection.indexOf(sortedCollection[0]);
		const lastIndex = sortedCollection.length;

		const newest = firstIndex;
		const oldest = firstIndex + lastIndex - 1;
		const prev = index + 1;
		const next = index - 1;

		id = getProjectID(resource);

		return {
			params: {
				[name]:
					name === "streams"
						? `/${getProjectID(resource)}/streams/${getProjectID(resource, "path")}`
						: slugify(resource.data.slug || resource.data.title),
			},
			props: {
				entry: {
					globalNewest: collection[0],
					globalOldest: collection[collection.length - 1],
					globalPrev: collection[prev],
					globalNext: collection[next],

					newest: collection[newest],
					oldest: collection[oldest],
					prev:
						getProjectID(collection[prev]) === id
							? collection[prev]
							: undefined,
					next:
						getProjectID(collection[next]) === id
							? collection[next]
							: undefined,
					current: resource,

					collection: filterCollection(collection, id),
					index: index,
				},
			},
		};
	});
}

function setHref(...content: Array<Collection | undefined>): string {
	if (content) {
		const root = content[0];
		const subdir = content[1];

		if (subdir && subdir.collection === "streams") {
			return `/${subdir.data.collection}/${getProjectID(subdir)}/streams/${getProjectID(subdir, "path")}`;
		}

		if (root) {
			const { collection, data, id } = root;

			return `/${collection}/${slugify(data.slug || data.title) || id}`;
		}
	}

	return "";
}

function setStreamTitle(entry: Collection, seo?: string) {
	if (entry.collection === "streams") {
		const entryName = findContent(
			entry.data.collection,
			getProjectID(entry),
		)?.data.title;
		const seoTitle = seo ? ` | ${seo}` : "";
		const episode = Number(getProjectID(entry, "path")).toLocaleString();

		return `${entryName}${seoTitle} | Stream #${episode} - ${entry.data.title}`;
	}

	return "";
}

function setWarning(element: string, prop: string): void {
	return console.warn(
		`⚠️ <${element} />: ${prop} property is either missing or invalid.`,
	);
}

function slugify(input: string): string {
	return input
		.toLowerCase()
		.replace("&", "-and-")
		.replace("/", "-")
		.replace(/^\s+|\s+$/g, "")
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

function sortCollection(collection: CollectionEntry<TCollection>[]) {
	return collection.sort(
		(olderDate, newerDate) =>
			newerDate.data?.dateUpdated?.valueOf() ||
			newerDate.data.dateCreated.valueOf() -
				olderDate.data.dateCreated.valueOf(),
	);
}

function titleCase(input: string | undefined) {
	const smallWords = new Set([
		"a",
		"an",
		"the",
		"and",
		"but",
		"or",
		"for",
		"nor",
		"on",
		"at",
		"to",
		"from",
		"by",
	]);
	const words = input?.toLowerCase().split(/\s+/);
	return words
		?.map((word, index) => {
			if (
				index !== 0 &&
				index !== words.length - 1 &&
				smallWords.has(word)
			) {
				return word;
			}
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ")
		.replace(": t", ": T")
		.replace("3d", "3D")
		.replace("B&m", "B&M");
}

export default utils;
