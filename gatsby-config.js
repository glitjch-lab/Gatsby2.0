module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blogs",
        path: `${__dirname}/content/blogs`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
  ],
}
