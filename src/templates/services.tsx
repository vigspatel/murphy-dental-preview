import { Article } from '@/Article';
import CLink from '@/CLink';
import { CommonHero } from '@/CommonHero';
import { getNavLink, info } from '@/layout/NavLinks';
import { Seo } from '@/layout/Seo';
import { MDXProvider } from '@mdx-js/react';
import useLocationData from '@s/hooks/useLocationData';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { Children, Fragment, ReactNode } from 'react';

const Call = ({ children }: { children: ReactNode }) => (
    <CLink to={info.phone.link}>{Children.count(children) ? children : info.phone.text}</CLink>
);

const Link = ({ children, to }: { children: ReactNode; to: string }) => {
    if (!to.startsWith('https') && !to.startsWith('#')) {
        return <CLink to={to === '/' ? '/' : getNavLink(to)}>{children}</CLink>;
    }
    return (
        <a href={to} target={to.startsWith('#') ? '_self' : '_blank'} rel="noreferrer">
            {children}
        </a>
    );
};

export default function ServiceTemplate({ data, children }: PageProps<Queries.servicePagesQuery>) {
    const description = data.mdx?.frontmatter.description,
        customTitle = data.mdx?.frontmatter.customTitle,
        image = data.mdx?.frontmatter.image;

    const { title } = useLocationData();

    const Img = () =>
        image && image.childImageSharp ? (
            <GatsbyImage
                image={getImage(image.childImageSharp) as IGatsbyImageData}
                alt={title}
                className="service-image"
            />
        ) : (
            <Fragment />
        );

    return (
        <React.Fragment>
            <CommonHero>
                <h1>{customTitle || title}</h1>
                <p>{description}</p>
            </CommonHero>
            <Article>
                <div>
                    <MDXProvider components={{ Img, Call, Link }}>{children}</MDXProvider>
                </div>
            </Article>
        </React.Fragment>
    );
}

export const query = graphql`
    query servicePages($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                description
                customTitle
                image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 850
                            height: 550
                            transformOptions: { cropFocus: CENTER }
                        )
                    }
                }
            }
        }
    }
`;

export const Head = () => {
    return <Seo />;
};
