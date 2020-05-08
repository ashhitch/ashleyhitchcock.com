import React from 'react';
import { Box, Heading } from 'grommet';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import SEO from '../components/seo';

const AboutPage = () => (
  <>
    <SEO title="Open Source" description="Open source projects I work on" />
    <PageWrap>
      <HtmlContent>
        <Heading>Open Source</Heading>
        <p>
          Open source is at the core of web development, it keeps the web spinning. So it’s great to give back when I
          can.
        </p>
        <Heading level="2">WPGraphQl Yoast SEO Plugin</Heading>
        <p>This is an extension to the WPGraphQL plugin that returns Yoast SEO data.</p>
        <p>
          <a href="https://github.com/ashhitch/wp-graphql-yoast-seo">View on GitHub</a>
        </p>
        <Heading level="2">VS Code CSS Comments</Heading>
        <p>
          Plugin for VS Code to give CSS Comments as snippets, for easy and consistent&nbsp;comments. Over 35k installs!
        </p>
        <p>
          <a href="https://github.com/ashhitch/vs-code-css-comments">View on GitHub</a>
        </p>
        <Heading level="2">VS Code Touchbar plugin</Heading>
        <p>Plugin to add commands to the touch bar on the latest MacBook Pros.</p>
        <p>
          <a href="https://github.com/ashhitch/vscode-touchbar-command-palette">View on GitHub</a>
        </p>
      </HtmlContent>
    </PageWrap>
  </>
);

export default AboutPage;
