module.exports = {
  siteMetadata: {
    title: `Amol Thite`,
    author: `Amol Thite`,
    description: `I am a creative person who builds great software`,
    siteUrl: `https://amolishere.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/amolTthite`,
      },
      {
        name: `github`,
        url: `https://github.com/thite-amol`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i`,
          `Merriweather\:300,300i,400,400i,700,700i,900,900i`
        ]
      }
    },
  ],
}
