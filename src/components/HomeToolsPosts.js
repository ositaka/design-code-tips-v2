import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class HomeToolsPostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        <div className="cards-list two-columns">
          {posts &&
            posts.map(({ node: post }) => (
              <Link
                to={post.fields.slug}
                key={post.id}
                className="card has-image"
              >
                <article
                  className={`post ${post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <div className="post-image">
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
                  </div>
                  <div className="post-info">
                    <h3 className="post-title title-h3">
                      {post.frontmatter.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </>
    )
  }
}

HomeToolsPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function HomeToolsPosts() {
  return (
    <StaticQuery
      query={graphql`
        query HomeToolsPostsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
              frontmatter: {
                templateKey: { eq: "tools-post" }
                featuredpost: { eq: true }
              }
            }
            limit: 6
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
      render={(data, count) => (
        <HomeToolsPostsTemplate data={data} count={count} />
      )}
    />
  )
}
