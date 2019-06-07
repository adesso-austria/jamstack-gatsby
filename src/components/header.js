import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <Link activeClassName="active" to="/">HOME</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/about">ABOUT</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/blog">BLOG</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/stories">STORIES</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/contact">CONTACT</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header