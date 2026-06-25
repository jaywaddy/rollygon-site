import type { Core } from "@strapi/strapi";

const config = ({
    env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    "auto-slug": {
        enabled: true,
    },
});

export default config;
