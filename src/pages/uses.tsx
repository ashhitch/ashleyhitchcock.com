import React from 'react';
import { Heading } from 'grommet';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import SEO from '../components/seo';

const UsesPage = () => (
  <>
    <SEO title="Uses" description="The Kit I use to build websites and web apps" />
    <PageWrap>
      <HtmlContent>
        <Heading>Uses</Heading>
        <h2>Hardware</h2>
        <ul>
          <li>15″ MacBook Pro with Touchbar</li>
          <li>2 LG Superwide Monitors</li>
          <li>Apple Space Gray Magic Keyboard</li>
          <li>Apple Space Gray Magic Mouse</li>
          <li>CalDigit TS3 Plus Thunderbolt 3 Dock</li>
          <li>Surface Pro (Windows testing and travel)</li>
        </ul>
        <h2>Editor &amp; Terminal</h2>
        <ul>
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> is my current editor of choice
          </li>
          <li>
            I use a theme called Night Owl for
            <a href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2">VS Code </a>
          </li>
          <li>
            <a href="https://www.iterm2.com/">iTerm2</a> for my terminal
          </li>
          <li>
            I also use <a href="https://fishshell.com/">Fish shell</a> (bash with superpowers)
          </li>
        </ul>
        <h2 id="design-tools">Design tools:</h2>
        <ul>
          <li>Sketch</li>
          <li>Affinity Photo</li>
        </ul>
        <h2>Desk Setup</h2>
        <ul>
          <li>
            I have an{' '}
            <a href="https://www.autonomous.ai?&amp;rid=a9e570&amp;utm_campaign=referrals&amp;utm_source=referrals_emailshippedtwitter&amp;utm_medium=a9e570&amp;utm_term=referrals_share">
              Autonomous Standing Desk
            </a>
          </li>
          <li>Monitors are arranged vertically</li>
        </ul>
      </HtmlContent>
    </PageWrap>
  </>
);

export default UsesPage;
