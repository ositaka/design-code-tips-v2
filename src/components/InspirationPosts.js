import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class InspirationPostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Inspiration | ${title}`} />
        <div className="cards-list">
          {posts &&
            posts.map(({ node: post }) => (
              <Link
                to={post.fields.slug}
                key={post.id}
                className="card has-image"
              >
                <article
                  className={`post ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <div className="post-image">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            width:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.width,
                            height:
                              post.frontmatter.featuredimage.childImageSharp
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
                    <div className="post-details">
                      <span className="post-date">{post.frontmatter.date}</span>
                      {post.frontmatter.tags && post.frontmatter.tags.length ? (
                        <ul className="post-tags">
                          {post.frontmatter.tags.map((tag) => (
                            <li key={tag + `tag`}>#{tag}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </>
    )
  }
}

InspirationPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function InspirationPosts() {
  return (
    <StaticQuery
      query={graphql`
        query InspirationPostsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "inspiration-post" } } }
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
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 420
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <InspirationPostsTemplate data={data} count={count} />
      )}
    />
  )
}
