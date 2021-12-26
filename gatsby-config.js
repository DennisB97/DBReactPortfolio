module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dennisb.me",
    title: "DennisBPortfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",`gatsby-plugin-styled-components`, `gatsby-plugin-sharp`, `gatsby-plugin-image`,`gatsby-transformer-sharp`,`gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name:  `images`,
      path: `${__dirname}/src/images`,
    },},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              showCaptions: false,
              quality: 90,
              backgroundColor: "transparent",
              linkImagesToOriginal: false
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:  `projects`,
        path: `${__dirname}/src/projects`,
      },},
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name:  `projectImages`,
          path: `${__dirname}/src/images/projectImages`,
        },},
       `gatsby-remark-images`, `gatsby-plugin-catch-links`,
  ],
};

