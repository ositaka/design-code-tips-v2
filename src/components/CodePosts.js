import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'

class CodePostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Code | ${title}`} />
        <div className="cards-list">
          {posts &&
            posts.map(({ node: post }) => (
              <Link to={post.fields.slug} key={post.id} className="card">
                <article
                  className={`post ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
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

CodePosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function CodePosts() {
  return (
    <StaticQuery
      query={graphql`
        query CodePostsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "code-post" } } }
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
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <CodePostsTemplate data={data} count={count} />}
    />
  )
}
