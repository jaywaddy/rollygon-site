export function slugify (input: string): string {
    return input
        .replace(/^\s+|\s+$/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
}

export function formatDate(date: Date, monthFormat?: "short"): string {
    return new Date(date).toLocaleString("en-US", {
        timeZone: "UTC",
        month: monthFormat ? "short" : "long",
        day: "2-digit",
        year: "numeric",
    });
}

export function calcWordCount(input: string): number {
	const cleanInput = input
        .replace(/(^\s*)|(\s*$)/gi,"")
        .replace(/[ ]{2,}/gi," ")
        .replace(/\n /,"\n");
    
    return cleanInput.split(" ").length;
}

export function calcReadTime(article: string): number {
	const wordsPerMinute = 248;

	return Math.ceil(calcWordCount(article) / wordsPerMinute);
}

export function titleCase(input: string):string {
    return input
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");    
}