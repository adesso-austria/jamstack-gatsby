import React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from "gatsby";

const BlogPage = () => {
  const pageQuery = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            title
            author
            date
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  const postCount = pageQuery.allMarkdownRemark.totalCount
  const posts = pageQuery.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>POSTS ({postCount})</h1>
      <ul>
        {
          posts.map((elements) => {
            const blog_post = elements.node

            return (
              <li key={blog_post.fields.slug}>
                <h2>{ blog_post.frontmatter.title.toUpperCase() }</h2>
                <small><b>Author:</b> { blog_post.frontmatter.author }</small><br/>
                <small><b>Date:</b> { blog_post.frontmatter.date }</small><br/><br/>
                <code>{ blog_post.frontmatter.excerpt }</code>
                <br/>
                <br/>
                <Link to={ `blog/${blog_post.fields.slug}` }>read more..</Link>
                <br/>
                <br/>
                <hr/>
              </li>
            ) 
          }
          )
        }
      </ul>
    </Layout>
  )
}

export default BlogPage
