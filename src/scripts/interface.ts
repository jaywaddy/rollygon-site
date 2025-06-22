interface Input {
    [key: string]: string;
}

export type ColorName = (
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "lime"
    | "blue"
    | "purple"
    | "fucshia"
    | "neutral"
);

export type PatternName = (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
);

export const Color: Input = {
    red: "var(--color-red)",
    orange: "var(--color-orange)",
    yellow: "var(--color-yellow)",
    lime: "var(--color-lime)",
    green: "var(--color-green)",
    blue: "var(--color-blue)",
    purple: "var(--color-purple)",
    fucshia: "var(--color-fucshia)",
    neutral: "var(--color-surface-primary)"
}

export const Pattern: Input = {
    "1": "var(--bg-1)",
    "2": "var(--bg-2)",
    "3": "var(--bg-3)",
    "4": "var(--bg-4)",
    "5": "var(--bg-5)",
    "6": "var(--bg-6)",
    "7": "var(--bg-7)",
}

export function setStyles(color?: string, pattern?: string) {
    const colorStyles = `--color: ${color};`;
    const patternStyles = `--pattern: ${pattern};`;

    if (color && pattern) {
        return colorStyles + patternStyles;
    }

    if (color) {
        return colorStyles;
    }

    if (pattern) {
        return patternStyles;
    }

    return "";
}
