import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

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
            <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
            <div dangerouslySetInnerHTML={ innerHTML }></div>
        </Layout>
    )
}

export default Blog