import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Heading } from 'grommet';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import IntroWrap from '../components/intro';
import Techstack from '../components/techstack';
import HtmlContent from '../components/htmlContent';

import useTypewriter from 'react-typewriter-hook';


const MagicOcean = [
    'Slinger of Divs',
    'Slayer of JavaScript',
    'Hater of !important',
    'survivor of IE6',
];
let index = 0;

const IndexPage = () => {

    const [magicName, setMagicName] = useState('Hey i\'m Ash Hitchcock 👋');
    const intervalRef = useRef({});
    const h1 = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 2 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );

    return (
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
                <Heading level="1">{h1}</Heading>
                <HtmlContent>
                    <p>Ash Hitchcock, Front-end Development Director at Fresh Egg. Focused on continuing to grow in the field of web development backed up by over 15 years of creating for the web. Lover of all things JavaScript including React, TypeScript, Node.</p>
                    <p><Link to="/about">Read more</Link></p>
                </HtmlContent>

            </IntroWrap>
            <Techstack />
        </Layout>
    );
};

export default IndexPage;
