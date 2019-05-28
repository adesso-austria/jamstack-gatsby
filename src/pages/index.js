import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>JamStack GatsbyJS Starter</h1>
      <p>
        GatsbyJS starter was developed in preperation for a talk hosted by adesso Austria GmbH.
        <br/><br/>
        For a brief introduction to its features visit <Link to="/about">About</Link>.
        <hr/>
        Do you want to contact <Link to="/contact"> me?</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
