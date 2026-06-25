/**
 * `tools-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CFeaturedAsset, CToolCard } from "../../../components";

const populate = {
    featured: CFeaturedAsset("tool"),
    allTools: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In tools-page-populate middleware.");

        await next();
    };
};
