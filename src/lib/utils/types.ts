import type { CollectionEntry } from "astro:content";
import type { TIcon } from "@components/ui/Icon.astro";
import type { TInputFieldType } from "@components/ui/Input.astro";

export type TCategory = {
	collection?: TCollection;
	href: string;
	label: string;
	plural?: string;
	singular?: string;
};

export type TCollection = "models" | "resources" | "streams" | "tools";

export type TCollectionGroup = {
	icon?: TIcon;
	label: string;
	links?: TCategory[];
	singular?: string;
	plural?: string;
};

export type TCta = {
	href?: string;
	icon?: TIcon;
	label?: string;
};

export type TDynamicPageInfo = {
	params: {
		streams: string;
	};
	props: {
		entry: TEntry;
	};
};

export type TEntry = {
	globalNewest?: CollectionEntry<TCollection>;
	globalOldest?: CollectionEntry<TCollection>;
	globalPrev?: CollectionEntry<TCollection>;
	globalNext?: CollectionEntry<TCollection>;
	newest?: CollectionEntry<TCollection>;
	oldest?: CollectionEntry<TCollection>;
	prev?: CollectionEntry<TCollection>;
	next?: CollectionEntry<TCollection>;
	collection: CollectionEntry<TCollection>[];
	current: CollectionEntry<TCollection>;
	index: number;
};

export type TFormField = {
	group?: boolean;
	id?: string;
	label?: string;
	multiple?: boolean;
	name?: string;
	options?: string[];
	placeholder?: string;
	required?: boolean;
	type?: TInputFieldType;
	containsOther?: boolean;
	fields?: TFormField[];
};

export type TFormGroup = {
	label?: string;
	name?: string;
	required?: boolean;
};

export type TFormSection = {
	groups: Array<TFormField>;
	title?: string;
};

export type TImage = {
	alt: string;
	path: string;
};

export type TZodImage = {
	src: string;
	width: number;
	height: number;
	format:
		| "apng"
		| "png"
		| "jpg"
		| "jpeg"
		| "tiff"
		| "webp"
		| "gif"
		| "svg"
		| "avif";
};
