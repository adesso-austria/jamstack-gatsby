import React from 'react'
import PropTypes from "prop-types"
import {
    StaticQuery,
    graphql
} from "gatsby"
import Helmet from 'react-helmet'

const SEO = ({
    title,
    description,
    pathname,
    article
}) => ( <
    StaticQuery query = {
        query
    }
    render = {
        ({
            site: {
                siteMetadata: {
                    title,
                    titleTemplate,
                    defaultDescription,
                    siteUrl,
                    socialLinks: {
                        twitter
                    }
                }
            }
        }) => {
            const seo = {
                title: title,
                description: description || defaultDescription,
                url: `${siteUrl}${pathname || '/'}`,
            }

            return (
            <>
                <Helmet title={seo.title} titleTemplate={titleTemplate}>
                    <meta name="description" content={seo.description} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {(article ? true : null) && (
                    <meta property="og:type" content="article" />
                    )}
                    {seo.title && <meta property="og:title" content={seo.title} />}
                    {seo.description && (
                    <meta property="og:description" content={seo.description} />
                    )}
                    {seo.image && <meta property="og:image" content={seo.image} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    {seo.twitter && (
                    <meta name="twitter:creator" content={seo.twitter} />
                    )}
                    {seo.title && <meta name="twitter:title" content={seo.title} />}
                    {seo.description && (
                    <meta name="twitter:description" content={seo.description} />
                    )}
                </Helmet>
            </>
            )
        }
    }
    />
)

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
    sociallinks: {
        twitter: PropTypes.string
    }
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false
}

const query = graphql `
  {
    site {
      siteMetadata {
		title
        titleTemplate
        author
        company
        year
        url
        description
        socialLinks {
          twitter
        }
      }
    }
  }
`