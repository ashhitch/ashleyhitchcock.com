import React from 'react';
import { Box, Heading } from 'grommet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SnipsPage = ({ pageContext, scope, data: { mdx } }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} />
    <PageWrap>
      <HtmlContent>
        <Heading>{mdx.frontmatter.title}</Heading>

        <MDXRenderer>{mdx.body}</MDXRenderer>
        <div>
          <a href={`https://www.instagram.com/p/${pageContext.node.id}/`} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </div>
      </HtmlContent>
    </PageWrap>
  </Layout>
);

export default SnipsPage;

export const query = graphql`
  query GET_SNIP($id: String) {
    mdx(frontmatter: { id: { eq: $id } }) {
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
