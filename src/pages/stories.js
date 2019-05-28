import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Stories = () => {
    const pageQuery = useStaticQuery(graphql`
        {
            allInstaNode {
                edges {
                    node {
                        username
                        caption
                        likes
                        localFile {
                            childImageSharp {
                                fixed(width: 200, height: 200) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const stories = pageQuery.allInstaNode.edges

    return (
        <Layout>
            <h1>Stories from <i>@{ stories[0].node.username }</i></h1>
            <br/>
            <div class="stories_gallery">
                {
                    stories.map((storie) => 
                        (
                            <Img fixed={storie.node.localFile.childImageSharp.fixed} /> 
                        )
                    )
                }
            </div>
        </Layout>
    )
}

export default Stories