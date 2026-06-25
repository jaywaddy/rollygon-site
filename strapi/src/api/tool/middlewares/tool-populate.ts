/**
 * `tool-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CFile, CImage, CLink, CModelCard } from "../../../components";

const populate = {
    externalLink: CLink,
    featuredImage: CImage,
    featuredModels: CModelCard,
    file: CFile,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In tool-populate middleware.");

        await next();
    };
};
