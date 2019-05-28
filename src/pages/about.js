import React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>GatsbyJS Starter</h1>
      <hr/>
      <p>
        This starter shows (some of) the capabilities of gatsbyJS.
      </p>
      <p>
        If you navigate to <b>Blog</b> you see content generated from a local folder in which I put some Markdown files.
      </p>
      <p>
        The <b>Stories</b> page shows how you can fetch data from an external source. In this project I used the public instagram account of adesso_ag.
      </p>
      <p>
        <b>Home</b>, <b>About</b> and <b>Contact</b> are <i>Javascript</i> files that render static content and utilize a Layout.
      </p>
      <p>
        The styling is done in Sass and works responsive to a reasonable degree.
      </p>
    </Layout>
  )
}

export default AboutPage
