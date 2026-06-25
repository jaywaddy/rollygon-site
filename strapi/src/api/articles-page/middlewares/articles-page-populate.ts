/**
 * `articles-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CFeaturedAsset } from "../../../components";

const populate = {
    featured: CFeaturedAsset("article"),
    allArticles: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In articles-page-populate middleware.");

        await next();
    };
};
