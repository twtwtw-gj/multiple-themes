/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `twtwtw-site title`,
    description: `A description for your blazing fast site, using multiple themes!`,
    author: `twtwtw-gj`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/twtwtw-gj`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/` so this could also be included without options as just `gatsby-theme-blog`,
        basePath: `/`,
      },
    },
  ],
}