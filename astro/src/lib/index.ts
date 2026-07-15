// export async function getStrapiData<Type>(
//     path: string,
// ): Promise<TStrapiResponse<Type>> {
//     const BASE_API_URL =
//         import.meta.env.VITE_STRAPI_BASE_URL ?? "http://localhost:1337";
//     const url = new URL(path, BASE_API_URL);
//     const response = await fetch(url.href);
//     const data = await response.json();

//     return data;
// }
