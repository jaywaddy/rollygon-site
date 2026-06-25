/**
 * `model-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CFile, CImage, CToolCard } from "../../../components";

const populate = {
    featuredImage: CImage,
    featuredTools: CToolCard,
    file: CFile,
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In model-populate middleware.");

        await next();
    };
};
