/**
 * @author Dominik Dorfstetter
 * @filename /src/components/layout.js
 * @version 1.0
 * @description The layout component of our Gatsby site
 */
import React from 'react'
import Header from './header'
import Footer from './footer'
import SEO from './seo'
import '../styles/index.scss'

import styles from '../styles/modules/layout.module.scss'

/*
   LAYOUT COMPONENT

   Glues our site together. In here all the building blocks of our page come together.
      Building blocks:
         SEO             : Contains our meta-data, page-title
         Header          : Our header component
         .page_wrapper   : The router (our main pages)
         Footer          : Our footer component
*/
const Layout = ({ children }) => {
   return (
      <>
         <SEO title="Home" keywords={['gatsby', 'application', 'adesso Austria GmbH']} />
         <Header/>
         <div className={styles.page_wrapper}>
            { children }
         </div>
         <Footer/>
      </>
   )
}

export default Layout