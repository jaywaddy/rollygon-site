import type { TCollection } from "./types";
import { type CollectionEntry } from "astro:content";

type Collection = CollectionEntry<TCollection>;

const utils = {
	calcReadTime,
	calcWordCount,
	capitalize,
	findContent,
	formatDate,
	setHref,
	setWarning,
	slugify,
	titleCase,
};

export type TUtils = typeof utils;

export function calcReadTime(article: string | undefined): string {
	const wordsPerMinute = 248;

	if (!article) {
		return "0 min. read";
	}

	const output = Math.ceil(calcWordCount(article) / wordsPerMinute);

	return `${output} min. read`;
}

export function calcWordCount(input: string): number {
	const cleanInput = input
		.replace(/(^\s*)|(\s*$)/gi, "")
		.replace(/[ ]{2,}/gi, " ")
		.replace(/\n /, "\n");

	return cleanInput.split(" ").length;
}

export function capitalize(input: string) {
	return input
		.split("-")
		.map((word) => {
			return word.charAt(0).toUpperCase() + String(word).slice(1);
		})
		.join("");
}

export function findContent(
	contentArray: Array<Collection>,
	id: string,
): Collection {
	return contentArray.find((content) => content.id === id) || contentArray[0];
}

export function formatDate(date: Date, monthFormat?: "short" | "long"): string {
	return new Date(date).toLocaleString("en-US", {
		timeZone: "UTC",
		month: monthFormat || "short",
		day: "2-digit",
		year: "numeric",
	});
}

export function setHref(content: Collection): string {
	const { collection, data, id } = content;

	return `/${collection}/${slugify(data.title) || id}`;
}

export function setWarning(element: string, prop: string): void {
	return console.warn(
		`⚠️ <${element} />: ${prop} property is either missing or invalid.`,
	);
}

export function slugify(input: string): string {
	return input
		.toLowerCase()
		.replace("&", "-and-")
		.replace("/", "-")
		.replace(/^\s+|\s+$/g, "")
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

export function titleCase(input: string): string {
	return input
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export default utils;
