require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    title: `Cyberwritings`,
    siteTitle: `Cyberwritings`,
    siteTitleAlt: `Cyberwritings`,
    siteHeadline: `Cyberwritings - thoughts and notes about technology, programming, startups, and life. `,
    siteUrl: `https://cyberwritings.com`,
    description: `Cyberwritings - thoughts and notes about technology, programming, startups, and life. `,
    siteDescription: `Cyberwritings - thoughts and notes about technology, programming, startups, and life. `,
    siteLanguage: `en`,
    siteImage: `TODO`, 
    author: `Patryk Jeziorowski`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/pjeziorowski`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/patrykjeziorowski`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cyberwritings - thoughts and notes about technology, programming, startups, and life. `,
        short_name: `Cyberwritings`,
        description: `Thoughts and notes about technology, programming, startups, and life. `,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ed64a6`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
