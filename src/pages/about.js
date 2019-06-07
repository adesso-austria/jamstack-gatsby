import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
      <h1>GatsbyJS Starter</h1>
      <hr/>
      <p>
        This starter shows (some of) the capabilities of gatsbyJS.
      </p>
      <p>
        If you navigate to <Link to="/blog">Blog</Link> you see content generated from a local folder in which I put some Markdown files.
      </p>
      <p>
        The <Link to="/stories">Stories</Link> page shows how you can fetch data from an external source. In this project I used the public instagram account of adesso_ag.
      </p>
      <p>
        <Link to="/">Home</Link>, <Link to="/about">About</Link> and <Link to="/contact">Contact</Link> are <i>JavaScript</i> files that render static content and utilize a Layout.
      </p>
      <p>
        The styling is done in Sass and works responsive to a reasonable degree.
      </p>
    </Layout>
  )
}

export default AboutPage
