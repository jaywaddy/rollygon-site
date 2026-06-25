/**
 * `article-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CImage, CModelCard, CToolCard } from "../../../components";

const populate = {
    featuredImage: CImage,
    featuredModels: CModelCard,
    featuredTools: CToolCard,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In article-populate middleware.");

        await next();
    };
};
