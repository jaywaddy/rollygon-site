interface ColorTheme {
    "--bg": string;
    "--bg-hover": string;
    "--fg": string;
    "--fg-hover": string;
}

export type Color = (
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "fuschia"
    | "neutral"
    | undefined
);

export const Red: ColorTheme = {
    "--bg": "var(--color-red-200)",
    "--bg-hover": "var(--color-red-100)",
    "--fg": "var(--color-red-700)",
    "--fg-hover": "var(--color-red-600)"
}

export const Orange: ColorTheme = {
    "--bg": "var(--color-orange-200)",
    "--bg-hover": "var(--color-orange-100)",
    "--fg": "var(--color-orange-700)",
    "--fg-hover": "var(--color-orange-600)"
}

export const Yellow: ColorTheme = {
    "--bg": "var(--color-yellow-200)",
    "--bg-hover": "var(--color-yellow-100)",
    "--fg": "var(--color-yellow-700)",
    "--fg-hover": "var(--color-yellow-600)"
}

export const Green: ColorTheme = {
    "--bg": "var(--color-green-200)",
    "--bg-hover": "var(--color-green-100)",
    "--fg": "var(--color-green-700)",
    "--fg-hover": "var(--color-green-600)"
}

export const Blue: ColorTheme = {
    "--bg": "var(--color-blue-200)",
    "--bg-hover": "var(--color-blue-100)",
    "--fg": "var(--color-blue-700)",
    "--fg-hover": "var(--color-blue-600)"
}

export const Purple: ColorTheme = {
    "--bg": "var(--color-purple-200)",
    "--bg-hover": "var(--color-purple-100)",
    "--fg": "var(--color-purple-700)",
    "--fg-hover": "var(--color-purple-600)"
}

export const Fuschia: ColorTheme = {
    "--bg": "var(--color-fuschia-200)",
    "--bg-hover": "var(--color-fuschia-100)",
    "--fg": "var(--color-fuschia-700)",
    "--fg-hover": "var(--color-fuschia-600)"
}
