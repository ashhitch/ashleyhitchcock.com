import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SnipGrid from '../components/snipGrid';
import { graphql } from 'gatsby';

const SnipsPage = ({ pageContext, data: { allInstaNode } }) => {
    console.log(allInstaNode);
    console.log(pageContext);
    return (
        <Layout>
            <SEO title="Front-end Snips" />
            <PageWrap>
                <HtmlContent>
                    <Heading>Helpful Front-end Snips</Heading>
                    <Paragraph fill><a href="https://www.instagram.com/frontendsnips/">Instagram</a> account I setup to share front-end code snippets.</Paragraph>
                    <SnipGrid edges={allInstaNode.edges} />
                </HtmlContent>
            </PageWrap>
        </Layout>
    );
};

export default SnipsPage;


export const query = graphql`
    query GET_SNIPS($ids: [String]) {


        allInstaNode(filter: {id: {in:$ids}}) {
            edges {
    node {
      id
      likes
      comments
      mediaType
      preview
      original
      timestamp
      caption
      localFile {
        childImageSharp {
          fluid(maxWidth: 460, maxHeight: 460) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

    }
  }
  }
        
    }
`;

