import type { CollectionEntry } from "astro:content";
import type { TIcon } from "@components/ui/Icon.astro";
import type { TInputFieldType } from "@components/ui/Input.astro";

export type TBlog = CollectionEntry<"blog">;

export type TCategory = {
	collection?: TCollection;
	href: string;
	label: string;
	plural?: string;
	singular?: string;
};

export type TCollection = "blog" | "gallery";

export type TCollectionGroup = {
	icon?: TIcon;
	label: string;
	links?: TCategory[];
	plural?: string;
	singular?: string;
};

export type TCta = {
	href?: string;
	icon?: TIcon;
	label?: string;
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
export type TGallery = CollectionEntry<"gallery">;

export type TImage = {
	alt: string;
	path: string;
};

export type TZodImage = {
	src: string;
	width: number;
	height: number;
	format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
};
