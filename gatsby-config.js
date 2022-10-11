module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dennisb.me",
    title: "DennisBPortfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",`gatsby-plugin-styled-components`, `gatsby-plugin-image`,`gatsby-transformer-sharp`,`gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`png`,`webp`]
        },
      },
    },
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
              withAvif: false,
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
          path: `${__dirname}/src/images/projectimages`,
        },},
       `gatsby-remark-images`, `gatsby-plugin-catch-links`,
  ],
};

