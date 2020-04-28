import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Heading } from 'grommet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IntroWrap from '../components/intro';
import Techstack from '../components/techstack';
import HtmlContent from '../components/htmlContent';
import useDarkMode from 'use-dark-mode';
import useTypewriter from 'react-typewriter-hook';
import useGreeting from '../hooks/useGreeting';

const welcomeMsgs = [
    'Slinger of Divs',
    'Slayer of JavaScript',
    'Hater of !important',
    'Survivor of IE6',
];
let index = 0;

const IndexPage = () => {

    const [theHeight, setTheHeight] = useState(undefined);
    const [magicName, setMagicName] = useState('I\'m Ash Hitchcock 👋');
    const intervalRef = useRef({});
    const headinglRef = useRef({});
    const greeting = useGreeting({});
    const h1 = useTypewriter(magicName);

    useEffect(
        () => {
            if (headinglRef && headinglRef.current) {
                const h = headinglRef.current.offsetHeight;
                if (h) {
                    setTheHeight(h);

                }
            }

        }, [headinglRef]);

    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 2 ? 0 : ++index;
                setMagicName(welcomeMsgs[index]);
            }, 5000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    const darkMode = useDarkMode(false);

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
                dark={darkMode.value}

            >
                <Heading level="1" color="dark-1"><div ref={headinglRef} style={theHeight ? { height: `${theHeight}px` } : { height: 'auto' }}>{h1}</div></Heading>
                <HtmlContent lightOnly>
                    <p>{greeting}, I'm Ash Hitchcock, Front-end Development Director at Fresh Egg. Focused on continuing to grow in the field of web development backed up by over 15 years of creating for the web. Lover of all things JavaScript including React, TypeScript, Node.</p>
                    <p><Link to="/about">Read more</Link></p>
                </HtmlContent>

            </IntroWrap>
            <Techstack />
        </Layout>
    );
};

export default IndexPage;
