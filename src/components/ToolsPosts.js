import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ToolsPostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Tools | ${title}`} />
        <div className="cards-list two-columns">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {post.frontmatter.appicon ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.appicon,
                            alt: `app icon for the tool ${post.frontmatter.title}`,
                            width:
                              post.frontmatter.appicon.childImageSharp
                                .gatsbyImageData.width,
                            height:
                              post.frontmatter.appicon.childImageSharp
                                .gatsbyImageData.height,
                          }}
                        />
                      </div>
                    ) : null}
                    <div className="post-meta">
                      <h3>
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="subtitle is-size-5 is-block">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </header>
                </article>
              </div>
            ))}
        </div>
      </>
    )
  }
}

ToolsPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function ToolsPosts() {
  return (
    <StaticQuery
      query={graphql`
        query ToolsPostsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "tools-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  appicon {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  description
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ToolsPostsTemplate data={data} count={count} />}
    />
  )
}
