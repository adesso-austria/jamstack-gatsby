module.exports = {
   siteMetadata: {
      title: 'adesso Gatsby Starter',
      author: 'Dominik Dorfstetter',
      company: 'adesso Austria GmbH',
      year: 2019,
      socialLinks: {
         twitter: 'https://twitter.com/dorfstetter_d'
      }
   },
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'src',
            path: `${__dirname}/src/`
         }
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
           // CommonMark mode (default: true)
           commonmark: true,
           // Footnotes mode (default: true)
           footnotes: true,
           // Pedantic mode (default: true)
           pedantic: true,
           // GitHub Flavored Markdown mode (default: true)
           gfm: true,
           // Plugins configs
           plugins: [],
         }
      }
   ]
}