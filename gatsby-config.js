/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.cid15.org',
        region: "us-east-1",
        protocol: "https",
        hostname: "www.cid15.org"
      },
    }
  ],
}
