export function getDate(date: Date | undefined): string | null {
    if (date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    console.warn("getDate(): date is invalid.");
    return null;
}

export function toPascalCase(input: string) {
    return String(input)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

export function slugify(input: string) {
    return String(input)
        .normalize("NFKD") // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, "") // remove combining diacritical marks
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, "") // remove non-alphanumeric characters
        .replace(/-+/g, "-") // remove consecutive hyphens
        .replace(/^-+|-+$/g, ""); // remove leading and trailing hyphens
}
