/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { CLink } from "../../../components";

const populate = {
    banner: {
        populate: {
            cta: CLink,
        },
    },
    contactForm: true,
    header: {
        populate: {
            logo: CLink,
            navLinks: CLink,
            cta: CLink,
        },
    },
    footer: {
        populate: {
            logo: CLink,
            groups: {
                populate: {
                    footerLinks: CLink,
                },
            },
        },
    },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        strapi.log.info("In global-populate middleware.");

        await next();
    };
};
