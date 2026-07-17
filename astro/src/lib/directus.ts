import { createDirectus, rest } from "@directus/sdk";

const LOCAL_API_ENDPOINT = "http://localhost:8055";
export const BASE_API_URL =
    import.meta.env.DIRECTUS_API_ENDPOINT ?? LOCAL_API_ENDPOINT;
export const directus = createDirectus(BASE_API_URL).with(rest());
