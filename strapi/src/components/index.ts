// (C)omponents
export const CImage = {
    fields: ["alternativeText", "url", "width", "height"],
};

export const CLink = {
    populate: {
        image: CImage,
    },
};

export const CFile = {
    fields: ["name", "size"],
};

export const CModel = {
    populate: {
        featuredImage: CImage,
        file: {
            fields: ["size"],
        },
    },
};

export const CTool = {
    populate: {
        featuredImage: CImage,
        file: {
            fields: ["size"],
        },
    },
};

// (R)outes
export const RArticles = {
    populate: {
        featuredImage: CImage,
        featuredModels: CModel,
        featuredTools: CTool,
    },
};

export const RGlobal = {
    populate: {
        banner: {
            populate: {
                cta: CLink,
            },
        },
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
    },
};

export const RLandingPage = {
    populate: {
        ctas: CLink,
        featuredModel: true,
        featuredArticles: true,
    },
};

export const RModels = {
    populate: {
        featuredImage: CImage,
        featuredTools: CTool,
        file: CFile,
    },
};

export const RTools = {
    populate: {
        externalLink: CLink,
        featuredImage: CImage,
        featuredModels: CModel,
        file: CFile,
    },
};
