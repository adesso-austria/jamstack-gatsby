import React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby";


const ContactPage = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialLinks {
            twitter
          }
        }
      }
    }
  `)

  const socialLinks = pageQuery.site.siteMetadata.socialLinks

  return (
    <Layout>
      <h1>Contact me</h1>
      <p>
        There are many roads that lead to rome, but only 1 to my <a href={socialLinks.twitter} rel="noopener noreferrer" target="_blank">
          twitter.
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
