import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

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
      <footer>
         <p>Created with ❤ by { meta.author } for { meta.company }, { meta.year }</p>
      </footer>
   )
}

export default Footer