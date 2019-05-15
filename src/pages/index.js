import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <h1>My personal blog</h1>
      <h2> Welcome traveler, I see you stumbled upon my humble blog.</h2>
      <p>
        Do you want to <Link to="/contact">contact me?</Link>
      </p>
      <Footer/>
    </div>
  )
}

export default IndexPage
