import useLocationData from '@s/hooks/useLocationData';
import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import { seoData } from './seoData';

type SeoProps = {
    title?: string;
    description?: string;
    meta?: { name: string; content: unknown; property?: undefined }[];
    keywords?: string;
    image?: IGatsbyImageData;
};

export const Seo = ({ description, meta = [], title, keywords, image }: SeoProps) => {
    const { site, og } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                    }
                }
                og: file(relativePath: { eq: "default-og.jpg" }) {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            width: 1230
                            height: 630
                            transformOptions: { cropFocus: CENTER }
                        )
                    }
                }
            }
        `
    );

    const { title: pageTitle } = useLocationData();

    const page = pageTitle
        ? pageTitle.replaceAll('/ ', '').replaceAll(':', '').replaceAll(' ', '-')
        : '';

    let siteUrl = site.siteMetadata.siteUrl;
    if (siteUrl.endsWith('/')) siteUrl = siteUrl.slice(0, -1);

    const metaDescription = description
        ? description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
        : seoData[page]
        ? seoData[page].d
        : site.siteMetadata.description;

    const theTitle = title
        ? title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        : seoData[page]
        ? seoData[page].t
        : site.siteMetadata.title;

    const theKeywords = keywords || site.siteMetadata.keywords;

    const imageData = image || og.childImageSharp.gatsbyImageData;
    const imageUrl = siteUrl + imageData.images.fallback.src;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={theTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: theKeywords,
                },
                {
                    property: `og:title`,
                    content: theTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: imageUrl,
                },
                {
                    property: 'og:image:width',
                    content: imageData.width,
                },
                {
                    property: 'og:image:height',
                    content: imageData.height,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
            ].concat(meta)}
        />
    );
};
