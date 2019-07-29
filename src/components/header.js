/**
 * @author Dominik Dorfstetter
 * @filename /src/components/header.js
 * @version 1.0
 * @description The header component of our Gatsby site
 */
import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/modules/header.module.scss'
import SideBar from '../components/sidebar'

/*
   PREDIFINED ROUTES
 */
const routes = [{
   title: 'HOME',
   url: '/'
},{
   title: 'ABOUT',
   url: '/about'
},{
   title: 'BLOG',
   url: '/blog'
},{
   title: 'STORIES',
   url: '/stories'
},{
   title: 'CONTACT',
   url: '/contact'
}]

/*
   HEADER COMPONENT

   We loop through our routes array and apply styles
 */
const Header = () => {
   return (
      <div id="App">
         <SideBar routes={routes} pageWrapId={"page-wrap"} outerContainerId={"App"} />
         <header className={styles.header}>
            <nav className={styles.nav}>
               <ul className={styles.ul}>
                  {
                     routes.map(page => {
                        return (<li key={page.title} className={styles.li}>
                           <Link activeClassName={styles.active} to={page.url.toString()}>{page.title.toUpperCase()}</Link>
                        </li>)
                     })
                  }
               </ul>
            </nav>
         </header>
      </div>
   )
}

export default Header