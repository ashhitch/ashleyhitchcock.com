import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Instagram } from 'grommet-icons';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SnipsPage = ({ pageContext, data: { mdx } }) => (
  // console.log({ pageContext });
  <Layout>
    <SEO title={mdx.frontmatter.title} />
    <PageWrap>
      <HtmlContent>
        <Heading>{mdx.frontmatter.title}</Heading>

        <MDXRenderer>{mdx.body}</MDXRenderer>
      </HtmlContent>
      <div>
        <Button
          href={`https://www.instagram.com/p/${pageContext.node.id}/`}
          target="_blank"
          rel="noopener noreferrer"
          label="View on Instagram"
          icon={<Instagram />}
        />
      </div>
    </PageWrap>
  </Layout>
);

export default SnipsPage;

export const query = graphql`
  query GET_SINGLE_SNIP($mdxId: String) {
    mdx(id: { eq: $mdxId }) {
      id
      body
      frontmatter {
        slug
        title
        id
        category
      }
    }
  }
`;
