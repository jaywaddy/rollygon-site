export interface ColorTheme {
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
    | "fuchsia"
    | "white"
    | undefined
);

export const Red: ColorTheme = {
    "--bg": "var(--color-red-200)",
    "--bg-hover": "var(--color-red-100)",
    "--fg": "var(--color-red-800)",
    "--fg-hover": "var(--color-red-700)"
}

export const Orange: ColorTheme = {
    "--bg": "var(--color-orange-200)",
    "--bg-hover": "var(--color-orange-100)",
    "--fg": "var(--color-orange-800)",
    "--fg-hover": "var(--color-orange-700)"
}

export const Yellow: ColorTheme = {
    "--bg": "var(--color-yellow-200)",
    "--bg-hover": "var(--color-yellow-100)",
    "--fg": "var(--color-yellow-800)",
    "--fg-hover": "var(--color-yellow-700)"
}

export const Green: ColorTheme = {
    "--bg": "var(--color-green-200)",
    "--bg-hover": "var(--color-green-100)",
    "--fg": "var(--color-green-800)",
    "--fg-hover": "var(--color-green-700)"
}

export const Blue: ColorTheme = {
    "--bg": "var(--color-blue-200)",
    "--bg-hover": "var(--color-blue-100)",
    "--fg": "var(--color-blue-800)",
    "--fg-hover": "var(--color-blue-700)"
}

export const Purple: ColorTheme = {
    "--bg": "var(--color-purple-200)",
    "--bg-hover": "var(--color-purple-100)",
    "--fg": "var(--color-purple-800)",
    "--fg-hover": "var(--color-purple-700)"
}

export const Fuchsia: ColorTheme = {
    "--bg": "var(--color-fuchsia-200)",
    "--bg-hover": "var(--color-fuchsia-100)",
    "--fg": "var(--color-fuchsia-800)",
    "--fg-hover": "var(--color-fuchsia-700)"
}

export const White: ColorTheme = {
    "--bg": "var(--color-neutral-50)",
    "--bg-hover": "var(--color-neutral-100)",
    "--fg": "var(--color-neutral-800)",
    "--fg-hover": "var(--color-neutral-700)"
}
