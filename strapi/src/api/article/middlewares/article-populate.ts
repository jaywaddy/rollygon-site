/**
 * `article-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { RArticles } from "../../../components";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query = RArticles;
        strapi.log.info("In article-populate middleware.");

        await next();
    };
};
