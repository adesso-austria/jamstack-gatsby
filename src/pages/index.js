import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>WELCOME</h1>
      <hr/>
      <p>
        GatsbyJS starter was developed in preperation for a talk hosted by&nbsp;
        <a href="https://adesso.at" rel="noopener noreferrer" target="_blank">adesso Austria GmbH</a>.
        <br/><br/>
        For a brief introduction to its features visit&nbsp;
        <Link to="/about">About</Link>.
        <br/><br/>
        <small>Do you want to contact&nbsp;
          <Link to="/contact">
            us?</Link>
        </small>
      </p>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    </Layout>
  )
}

export default IndexPage
