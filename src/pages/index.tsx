import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Heading } from 'grommet';
import useDarkMode from 'use-dark-mode';
import Typewriter from 'typewriter-effect';
import SEO from '../components/seo';
import IntroWrap from '../components/intro';
import Techstack from '../components/techstack';
import HtmlContent from '../components/htmlContent';
import useGreeting from '../hooks/useGreeting';

const welcomeMsgs = [
  "I'm Ash Hitchcock",
  'Slinger of Divs',
  'Slayer of JavaScript',
  'Hater of !important',
  'Survivor of IE6',
];

const IndexPage = () => {
  const greeting = useGreeting();

  const darkMode = useDarkMode(false);

  return (
    <>
      <SEO
        title="Front-end Developer"
        description="Ash Hitchcock, Front-end Developer Sussex UK - Slinger of Divs, Slayer of JavaScript, hater of !important; Front-end Development Director at Fresh Egg."
      />
      <IntroWrap
        pad={{
          vertical: 'large',
          horizontal: 'large',
        }}
        margin={{
          vertical: 'large',
        }}
        dark={darkMode.value}
      >
        <Heading level="1" color="dark-1">
          <Typewriter
            options={{
              strings: welcomeMsgs,
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <HtmlContent lightOnly>
          <p>
            <span role="img" aria-label="Waving hand">
              👋
            </span>{' '}
            {greeting}, I'm Ash Hitchcock, Front-end Development Director at Fresh Egg. Focused on continuing to grow in
            the field of web development backed up by over 15 years of creating for the web. Lover of all things
            JavaScript including React, TypeScript, GraphQl and Node.
          </p>
          <p>
            <Link to="/about">Read more</Link>
          </p>
        </HtmlContent>
      </IntroWrap>
      <Techstack />
    </>
  );
};

export default IndexPage;
