module.exports = {
  siteMetadata: {
    title: `GDPR Landing Page`
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ''
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 0,
        sv: 0
      }
    }
  ]
}
