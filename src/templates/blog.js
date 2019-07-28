import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby';

export const query = graphql`
    query(
        $slug: String!
    )
    {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                author
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    const innerHTML = {__html: props.data.markdownRemark.html};
    return (
        <Layout>
            <Link to="/blog">&#8592; Back</Link>
            <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
            <div dangerouslySetInnerHTML={ innerHTML }></div>
            <Link to="/blog">&#8592; Back</Link>
        </Layout>
    )
}

export default Blog