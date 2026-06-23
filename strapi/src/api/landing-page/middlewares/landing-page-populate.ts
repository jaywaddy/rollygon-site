/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { RLandingPage } from "../../../components";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query = RLandingPage;
        strapi.log.info("In landing-page-populate middleware.");

        await next();
    };
};
