import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
   return (
      <div>
         <Header/>
         <div class="page_wrapper">
            { props.children }
         </div>
         <Footer/>
      </div>
   )
}

export default Layout