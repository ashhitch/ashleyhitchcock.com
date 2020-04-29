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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-mdx',
    'gatsby-plugin-use-dark-mode', // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-catch-links',
  ],
};
