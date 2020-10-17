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
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
  ],
}