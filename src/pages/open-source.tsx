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
        <Heading level="2">Gatsby SEO For WpGraphQL and Yoast</Heading>
        <p>
          Takes data from WpGraphQL and WPGraphQl Yoast SEO and provides you with Meta Tags and JSON+LD Schema in
          Gatsby.
        </p>
        <p>
          <a href="https://github.com/ashhitch/gatsby-plugin-wpgraphql-seo">View on GitHub</a>
        </p>
        <Heading level="2">WPGraphQL Send Email Plugin</Heading>
        <p>
          One of the simple things about a traditional WordPress sites is sending emails, this plugin makes it easy to
          do this via a simple mutation when you are using WPGraphQL
        </p>
        <p>
          <a href="https://github.com/ashhitch/wp-graphql-send-mail">View on GitHub</a>
        </p>
        <Heading level="2">WPGraphQL Redirection Plugin</Heading>
        <p>Add WPGraphQl support for redirects made using the popular Redirection Plugin.</p>
        <p>
          <a href="https://github.com/ashhitch/wp-graphql-redirection">View on GitHub</a>
        </p>
        <Heading level="2">Gatsby plugin page data preview</Heading>
        <p>A little helper plugin that visualises your Gatsby Page Data in a super handy pullout blade.</p>
        <p>
          <a href="https://github.com/ashhitch/gatsby-plugin-page-data-preview">View on GitHub</a>
        </p>
        <Heading level="2">Source UK Bank Holidays into Gatsby</Heading>
        <p>Sources UK bank holidays from GOV.UK in Gatsby</p>
        <p>
          <a href="https://github.com/ashhitch/gatsby-source-uk-bank-holidays">View on GitHub</a>
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
