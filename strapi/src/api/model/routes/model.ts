/**
 * model router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::model.model", {
    config: {
        find: {
            middlewares: ["api::model.model-populate"],
        },
    },
});
