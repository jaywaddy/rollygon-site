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

export const CModelCard = {
    populate: {
        featuredImage: CImage,
        file: {
            fields: ["size"],
        },
    },
};

export const CToolCard = {
    populate: {
        featuredImage: CImage,
        file: {
            fields: ["size"],
        },
    },
};

export const CArticleCard = {
    populate: {
        featuredImage: CImage,
    },
};

export const CFeaturedAsset = (type: "tool" | "model" | "article") => {
    return {
        populate: {
            heading: true,
            tool: () => type === "tool" && CToolCard,
            model: () => type === "model" && CModelCard,
            article: () => type === "article" && CArticleCard,
        },
    };
};

// (R)outes

export const RGlobal = {
    populate: {
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
    },
};

export const RModels = {
    populate: {
        featuredImage: CImage,
        featuredTools: CToolCard,
        file: CFile,
    },
};
