module.exports = {
  siteMetadata: {
    title: `Florian Kapfenberger`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-51334401-3",
        // Setting this parameter is optional
        anonymize: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`
  ]
};
