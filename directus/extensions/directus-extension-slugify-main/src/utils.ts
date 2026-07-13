// import slugify from "slugify";

const slugify = (
	inputValue: string,
	options: { lower: boolean; replacement: string },
) => {
	return inputValue
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "") // strip diacritics
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, options.replacement) // non-alphanumerics -> hyphen
		.replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
};

export const createSlug = (inputValue: string, separator?: string) => {
	return inputValue
		? slugify(inputValue, {
				lower: true,
				replacement: separator || "-",
			})
		: "";
};
