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

function setForegroundColor(color: string) {
    return `color-mix(in srgb, var(${color}), black 70%)`
}

export const Red: ColorTheme = {
    "--bg": "var(--color-red)",
    "--bg-hover": "var(--color-red-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-red-700)",
}

export const Orange: ColorTheme = {
    "--bg": "var(--color-orange)",
    "--bg-hover": "var(--color-orange-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-orange-700)"
}

export const Yellow: ColorTheme = {
    "--bg": "var(--color-yellow)",
    "--bg-hover": "var(--color-yellow-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-yellow-700)"
}

export const Green: ColorTheme = {
    "--bg": "var(--color-green)",
    "--bg-hover": "var(--color-green-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-green-700)"
}

export const Blue: ColorTheme = {
    "--bg": "var(--color-blue)",
    "--bg-hover": "var(--color-blue-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-blue-700)"
}

export const Purple: ColorTheme = {
    "--bg": "var(--color-purple)",
    "--bg-hover": "var(--color-purple-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-purple-700)"
}

export const Fuchsia: ColorTheme = {
    "--bg": "var(--color-fuchsia)",
    "--bg-hover": "var(--color-fuchsia-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-fuchsia-700)"
}

export const White: ColorTheme = {
    "--bg": "var(--color-neutral-50)",
    "--bg-hover": "var(--color-neutral-100)",
    "--fg": setForegroundColor("--bg"),
    "--fg-hover": "var(--color-neutral-700)"
}
