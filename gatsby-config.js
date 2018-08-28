module.exports = {
  siteMetadata: {
    title: 'Florian Kapfenberger | Frontend Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['M PLUS Rounded 1c', 'Source Sans Pro'],
        },
      },
    },
    'gatsby-plugin-netlify',
  ],
}
