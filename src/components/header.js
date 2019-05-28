import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <Link activeClassName="active" to="/">Home</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/about">About</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/blog">Blog</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/stories">Stories</Link>
               </li>
               <li>
                  <Link activeClassName="active" to="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header