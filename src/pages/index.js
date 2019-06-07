import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>{"Welcome".toUpperCase()}</h1>
      <hr/>
      <p>
        GatsbyJS starter was developed in preperation for a talk hosted by <a href="https://adesso.at" rel="noopener noreferrer" target="_blank">adesso Austria GmbH</a>.
        <br/><br/>
        For a brief introduction to its features visit <Link to="/about">About</Link>.
        <br/><br/>
        <small>Do you want to contact <Link to="/contact"> me?</Link></small>
      </p>
    </Layout>
  )
}

export default IndexPage
