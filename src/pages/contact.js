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
      <h1>CONTACT US</h1>
      <hr/>
      <p>
        Business. People. Technology. Visit <a href="https://adesso.at" rel="noopener noreferrer" target="_blank">adesso Austria</a>.
      </p>
      <p>
        There are many roads that lead to rome, but only one to my <a href={socialLinks.twitter} rel="noopener noreferrer" target="_blank">
          twitter
        </a> profile.
      </p>
    </Layout>
  )
}

export default ContactPage
