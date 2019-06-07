import React from 'react'
import Header from './header'
import Footer from './footer'
import SEO from './seo'
import '../styles/index.scss'

const Layout = ({ location, children }) => {
   console.log(location);
   return (
      <>
         <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
         <Header/>
         <div className="page_wrapper">
            { children }
         </div>
         <Footer/>
         <div id="scrollToTop"></div>
      </>
   )
}

export default Layout