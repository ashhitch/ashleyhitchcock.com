import React from 'react';
import { Heading } from 'grommet';
import { Link } from 'gatsby';
import HtmlContent from '../components/htmlContent';
import PageWrap from '../components/pageWrap';
import SEO from '../components/seo';

const AboutPage = () => (
  <>
    <SEO title="About me" description="A little more about me. Front-end JavaScript developer based in Sussex, UK." />
    <PageWrap>
      <HtmlContent>
        <Heading>A little more about me</Heading>
        <p>
          <strong>Slinger of Divs, Slayer of JavaScript, hater of !important, survivor&nbsp;of IE6;</strong> Front-end
          developer focused on continuing to grow in the field of web and mobile app development. Brighton University
          graduate, Optimizely Platform and Developer Certified.
        </p>
        <p>
          Backed up by over 15 years of industry experience in my previous jobs at Spidersnet, an automotive digital
          marketing company which is now part of the Friday Media group. With the help of my strong front-end coding
          skills and my passion for performance and usability, I got promoted from Web Designer to Senior Web Designer
          and, eventually, as Online Development Manager.
        </p>
        <p>
          Currently working for Fresh Egg, a top-100 digital agency where I am responsible for websites, pattern
          libraries, hybrid apps and application user interfaces. Covering all aspects of responsive websites.
        </p>
        <p>
          Fluent in HTML5, SCSS/LESS/CSS, JavaScript; as well as using Node, PHP, WordPress, React, GraphQl, Angular,
          Ionic, build tools such as Webpack Grunt/Gulp and working in an ASP.net environment.
        </p>
        <p>
          Capable of delivering multilingual, visual, responsive and accessible solutions for every company’s needs.
          Writing code that stands up over time. Previous clients include John Lewis, Devitt Insurance, Confused.com,
          Westland, Just Eat, Kineo, Tropical Sky and Sykes Cottages.
        </p>
        <p>
          Enthusiastic about sharing my knowledge and past and present experiences with the team, helping overcome any
          challenges big or small. Fascinated with exploring new technology and ideas in order to enhance my skills set
          and work-flow.
        </p>
        <p>
          Hobbies outside of work include snowboarding, running and keeping in touch with the digital world and
          technology.
        </p>
        <p>
          I have also started publishing handy frontend tips on Instagram&nbsp;
          <a href="https://www.instagram.com/frontendsnips/">https://www.instagram.com/frontendsnips/</a> and
          Twitter&nbsp; <a href="https://twitter.com/frontendsnips">https://twitter.com/frontendsnips</a>
        </p>
        <h2>Some Podcasts I listen to</h2>
        <p>
          <a href="https://syntax.fm">Syntax.fm</a>&nbsp;–&nbsp;A Tasty Treats Podcast for Web Developers by Wes Bos and
          Scott&nbsp;Tolinski
        </p>
        <p>
          <a href="https://frontendhappyhour.com/" target="_blank" rel="noopener noreferrer">
            Front End Happy Hour
          </a>{' '}
          – A podcast featuring a panel of Software Engineers from Netflix, Evernote, Atlassian &amp; LinkedIn
        </p>
        <p>
          <a href="http://swindledpodcast.com/" target="_blank" rel="noopener noreferrer">
            Swindled
          </a>
          &nbsp;–&nbsp;A podcast that explores true cases of white-collar criminals, con artists, and corporate greed
        </p>
        <p>
          <a href="https://darknetdiaries.com/" target="_blank" rel="noopener noreferrer">
            Darknet diaries
          </a>
          &nbsp; –&nbsp;True stories from the dark side of the Internet.
        </p>
        <h2>Books I have recently enjoyed</h2>
        <p>
          <a
            href="https://www.amazon.co.uk/Functional-Light-JavaScript-Pragmatic-Balanced-FP-ebook/dp/B0787DBFKH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Functional-Light JavaScript
          </a>
        </p>
        <p>
          <a
            href="https://www.amazon.co.uk/Frontend-Architecture-Design-Systems-Sustainable-ebook/dp/B01B6WS868"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Architecture for Design Systems
          </a>
        </p>
        <h2>My Kit</h2>
        <p>
          Check out the<Link to="/uses"> Uses page</Link> to see my setup
        </p>
      </HtmlContent>
    </PageWrap>
  </>
);

export default AboutPage;
