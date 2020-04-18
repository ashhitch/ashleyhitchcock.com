import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>I'm Ash Hitchcock. Slinger of Divs, Slayer of JavaScript, hater of !important, survivor of IE6; Front-end Development Director at Fresh Egg. Focused on continuing to grow in the field of web development backed up by over 10 years of creating for the web. Lover of all things JavaScript including React, TypeScript, Node.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
