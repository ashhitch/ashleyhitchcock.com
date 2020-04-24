import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import HtmlContent from './../components/htmlContent';
import PageWrap from './../components/pageWrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SnipGrid from '../components/snipGrid';


const SnipsPage = () => (
    <Layout>
        <SEO title="Front-end Snips" />
        <PageWrap>
            <HtmlContent>
                <Heading>Helpful Front-end Snips</Heading>
                <Paragraph fill><a href="https://www.instagram.com/frontendsnips/">Instagram</a> account I setup to share front-end code snippets.</Paragraph>
                <SnipGrid />
            </HtmlContent>
        </PageWrap>
    </Layout>
);

export default SnipsPage;



