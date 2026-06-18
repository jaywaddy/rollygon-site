/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const link = {
  populate: {
    icon: {
      fields: ["alternativeText", "url"]
    }
  }
};

const populate = { 
  banner: { 
    populate: { link } 
  }, 

  header: { 
    populate: { 
      logo: link,
      navLinks: link,
      cta: link, 
    } 
  }, 

  footer: { 
    populate: { 
      logo: link,
      groups: {
        populate:{
          footerLinks: link
        }
      }
    } 
  } 
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
