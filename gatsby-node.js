const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


    // Loop through all nodes and only pick our md files
    // Through the use of gatsby-plugin-markdown-remark we pick up the already parsed information
    if ( node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        // GOAL 1 --> create a slug for your content
        // create slugs for our markdown-posts4
        // shows up in graphql under "fields" with the name you specified in createNodeField
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

        // GOAL 3 --> Generate a new page for each post
        
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    // deconstruct actions and get createPage
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // Loop through results
    res.data.allMarkdownRemark.edges.forEach((el) => {
        console.log(`/blog/${el.node.fields.slug}`)
        createPage({
            component: blogTemplate,
            path: `/blog/${el.node.fields.slug}`,
            context: {
                slug: el.node.fields.slug
            }
        })
    })
}