/**
 * `model-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { RModels } from "../../../components";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query = RModels;
        strapi.log.info("In model-populate middleware.");

        await next();
    };
};
