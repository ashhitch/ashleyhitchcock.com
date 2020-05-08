require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Ashley Hitchcock',
    description:
      'Slinger of <Divs />, Slayer of JavaScript, hater of !important, survivor&nbsp;of IE6; Front-end developer',
    author: '@ash_hitchcock',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/snips`,
        name: 'snip',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ash Hitchcock',
        short_name: 'Ash',
        start_url: '/',
        background_color: '#bada55',
        theme_color: '#bada55',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Share Tech Mono:300,400,700'],
        display: 'swap',
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-prettier-build',
      options: {
        types: ['html'],
        concurrency: 20,
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'frontendsnips',
        access_token: process.env.INSTAGRAM_TOKEN,
        instagram_id: process.env.INSTAGRAM_ID,
        paginate: 10,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-vscode',
            options: {},
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },

    'gatsby-plugin-use-dark-mode',
    'gatsby-plugin-typescript',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
  ],
};
