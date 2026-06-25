/**
 * `models-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CFeaturedAsset } from "../../../components";

const populate = {
    featured: CFeaturedAsset("model"),
    allModels: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In models-page-populate middleware.");

        await next();
    };
};
