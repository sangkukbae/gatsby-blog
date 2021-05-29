require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Ben's blog`,
    name: `ben`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my blog about development`,
    hero: {
      heading: `If I have seen further it is by standing on the shoulders of Giants.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github/sangkukbea.com`,
      }
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        pageLength: 6,
        authorsPage: true,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
