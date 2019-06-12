/**
 * @author Dominik Dorfstetter
 * @filename /src/components/footer.js
 * @version 1.0
 * @description The footer component of our Gatsby site
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/modules/footer.module.scss'

/*
   FOOTER COMPONENT

   useStaticQuery executes a graphQL query that gives us our siteMetadata
      back. The siteMetadata is defined in /gatsby-config.js
 */
const Footer = () => {
   const pageQuery = useStaticQuery(graphql`
      {
         site {
            siteMetadata {
               author,
               company,
               year
            }
         }
      }
   `)

   const meta = pageQuery.site.siteMetadata

   return (
      <footer className={styles.footer}>
         <p>Created with ❤ by { meta.author } for { meta.company }, { meta.year }</p>
      </footer>
   )
}

export default Footer