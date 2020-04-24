import React from 'react';
import { Box, Heading } from 'grommet';
import HtmlContent from './../components/htmlContent';
import PageWrap from './../components/pageWrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const UsesPage = () => (
    <Layout>
        <SEO title="Uses" />
        <PageWrap>
            <HtmlContent>
                <Heading>Uses</Heading>
                <h2>Hardware</h2>
                <ul>
                    <li>15″ MacBook Pro with Touchbar</li>
                    <li>2 LG Superwide Monitors</li>
                    <li>Apple Space Gray Magic Keyboard</li>
                    <li>Apple Space Gray Magic Mouse</li>
                    <li>Surface Pro (Windows testing and travel)</li>
                </ul>
                <h2>Editor &amp; Terminal</h2>
                <ul>
                    <li><a href="https://code.visualstudio.com/">Visual Studio Code</a>&nbsp;is my current editor of&nbsp;choice</li>
                    <li>I use a theme called Cobalt2 for&nbsp;<a href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2">VS Code&nbsp;</a></li>
                    <li><a href="https://www.iterm2.com/">iTerm2</a>&nbsp;for my terminal</li>
                    <li>I also use <a href="https://fishshell.com/">Fish shell</a> (bash with superpowers)</li>
                </ul>
                <h2 id="design-tools">Design tools:</h2>
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe XD</li>
                </ul>
                <h2>Desk Setup</h2>
                <ul>
                    <li>I have an <a href="https://www.autonomous.ai?&amp;rid=a9e570&amp;utm_campaign=referrals&amp;utm_source=referrals_emailshippedtwitter&amp;utm_medium=a9e570&amp;utm_term=referrals_share">Autonomous Standing&nbsp;Desk</a></li>
                    <li>Monitors&nbsp;are arranged vertically</li>
                </ul>
            </HtmlContent>
        </PageWrap>
    </Layout>
);

export default UsesPage;

