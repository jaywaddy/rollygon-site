/**
 * `tool-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { RTools } from "../../../components";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query = RTools;
        strapi.log.info("In tool-populate middleware.");

        await next();
    };
};
