import { GatsbyNode } from 'gatsby';
import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
    actions.createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    
    type MdxFrontmatter {
      image: File! @fileByRelativePath 
      customTitle: String
      description: String!
    }
  `);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    const parent = getNode(node.parent as string);

    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `slug`,
            value: parent?.relativeDirectory,
        });

        createNodeField({
            node,
            name: `collection`,
            value: parent?.sourceInstanceName,
        });
    }
};

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
    const result = await graphql<Queries.mdxPagesGenerationQuery>(`
        query mdxPagesGeneration {
            services: allMdx(filter: { fields: { collection: { eq: "services" } } }) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    const serviceTemplate = path.resolve(`./src/templates/services.tsx`);

    const service = result.data && result.data.services.nodes;

    service?.forEach(service => {
        const slug = service.fields.slug;

        actions.createPage({
            path: `/services/${slug}/`,
            component: `${serviceTemplate}?__contentFilePath=${service.internal.contentFilePath}`,
            context: {
                id: service.id,
            },
        });
    });
};
