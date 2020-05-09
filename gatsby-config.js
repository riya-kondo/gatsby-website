/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Title from siteMetadata',
    description: 'This is a blog about pandas',
    author: 'gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    // オフラインプラグインは作成されたファイルをキャッシュするように
    // manifestプラグインの後にリストする必要がある。
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
