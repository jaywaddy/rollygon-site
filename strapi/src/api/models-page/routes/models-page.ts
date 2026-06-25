/**
 * models-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::models-page.models-page", {
    config: {
        find: {
            middlewares: ["api::models-page.models-page-populate"],
        },
    },
});
