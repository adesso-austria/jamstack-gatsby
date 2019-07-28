module.exports = {
   siteMetadata: {
      title: 'gatsbyJS Starter',
      titleTemplate: "%s · 2019",
      author: 'Dominik Dorfstetter',
      siteUrl: `https://adesso-js-gatsby.netlify.com/`,
      company: 'adesso Austria GmbH',
      year: 2019,
      socialLinks: {
         twitter: 'https://twitter.com/dorfstetter_d'
      },
      description: "This is a starter template for GatsbyJS. Business. People. Technology. adesso Austria",
      url: "https://www.adesso.at/", // No trailing slash allowed!
   },
   plugins: [
      'gatsby-plugin-sitemap',
      'gatsby-plugin-zopfli',
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
      },
      {
         resolve: `gatsby-source-instagram`,
         options: {
            username: `adesso_ag`,
         },
      },
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            useMozJpeg: false,
            stripMetadata: true,
            defaultQuality: 75,
         }
      },
      'gatsby-transformer-sharp',
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `adessoGatsby`,
            short_name: `adessoGatsby`,
            start_url: `/`,
            background_color: `#ffffff`,
            theme_color: `#f7f0eb`,
            display: `standalone`,
            icon: `src/images/icon.png`
         },
      },
      {
         resolve: 'gatsby-plugin-sw',
         options: {
            swPath: 'static/sw.js', // Default to 'src/sw.js'
         },
      },
      'gatsby-plugin-offline',
      {
         resolve: 'gatsby-plugin-html-attributes',
         options: {
            lang: 'en'
         }
      },
      'gatsby-plugin-robots-txt',
      {
         resolve: `gatsby-plugin-feed`,
         options: {
            query: `
             {
               site {
                 siteMetadata {
                   title
                   description
                   siteUrl
                   site_url: siteUrl
                 }
               }
             }
           `,
            feeds: [{
               serialize: ({
                  query: {
                     site,
                     allMarkdownRemark
                  }
               }) => {
                  return allMarkdownRemark.edges.map(edge => {
                     return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.excerpt,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.fields.slug,
                        custom_elements: [{
                           "content:encoded": edge.node.html
                        }],
                     })
                  })
               },
               query: `
                 {
                   allMarkdownRemark(
                     sort: { order: DESC, fields: [frontmatter___date] },
                   ) {
                     edges {
                       node {
                         excerpt
                         html
                         fields { slug }
                         frontmatter {
                           title
                           date
                         }
                       }
                     }
                   }
                 }
               `,
               output: "/rss.xml",
               title: "jamstack gatsby rss feed",
               match: "^/blog/",
            }, ],
         },
      },
   ]
}