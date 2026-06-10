import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    graphqlTypegen: true,
    trailingSlash: 'always',
    siteMetadata: {
        title: 'Cosmetic Dental Services in North Carolina - Murphy Dental Center',
        author: 'moderndocmedia.com',
        siteUrl: `https://murphydentalcenter.com`,
        description:
            'Murphy Dental Center offers a comprehensive list of general, emergency, and cosmetic dental services to meet the needs of the whole family. in North Carolina.',
        keywords:
            'murphy dental center, murphy dental center north carolina,  Cosmetic Dental Services in Murphy North Carolina, Dental Emergencies Services in Murphy North Carolina',
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-emotion`,
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    // disable plugins
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                    quality: 95,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Murphy Dental Center: Cosmetic Dental Services in North Carolina`,
                short_name: `Murphy Dental Center`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `assets/icons/favicon.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://murphydentalcenter.com`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./assets/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['UA-190655216-23', 'G-T0K4CTFLQK'],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],
                gatsbyRemarkPlugins: [`gatsby-remark-copy-linked-files`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `services`,
                path: `./src/content/services/`,
            },
        },
    ],
};

export default config;
