import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'grommet';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import IntroWrap from '../components/intro';
import Techstack from '../components/techstack';
import HtmlContent from '../components/htmlContent';


const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IntroWrap
            pad={{
                'vertical': 'large',
                'horizontal': 'large',
            }}
            margin={{
                'vertical': 'large',
            }}
        >
            <Heading level="1">Hey people 👋</Heading>
            <HtmlContent>
                <p>I'm Ash Hitchcock. Slinger of Divs, Slayer of JavaScript, hater of !important, survivor of IE6; Front-end Development Director at Fresh Egg. Focused on continuing to grow in the field of web development backed up by over 15 years of creating for the web. Lover of all things JavaScript including React, TypeScript, Node.</p>
                <p><Link to="/about">Read more</Link></p>
            </HtmlContent>

        </IntroWrap>
        <Techstack />
    </Layout>
);

export default IndexPage;
