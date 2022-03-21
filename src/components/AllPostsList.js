import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class AllPostsListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`All Posts | ${title}`} />
        <ul className="list">
          {posts &&
            posts.map(({ node: post }) => (
              <li key={post.id} className="list-post">
                <Link to={post.fields.slug}>
                  <article className={`post ${post.frontmatter.featuredpost ? 'is-featured' : ''}`} >
                    <div className='post-info'>
                      <h3 className="post-title title-h3">
                        {post.frontmatter.title}
                      </h3>
                      <div className='post-details'>
                        <span className="post-date">
                          {post.frontmatter.date}
                        </span>
                        {post.frontmatter.tags && post.frontmatter.tags.length ? (
                          <ul className="post-tags">
                            {post.frontmatter.tags.map((tag) => (
                              <li key={tag + `tag`}>
                                #{tag}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

AllPostsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function AllPostsList() {
  return (
    <StaticQuery
      query={graphql`
        query AllPostsListQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { in: ["code-post", "design-post", "inspiration-post", "podcast-post", "tools-post"] } } }
            limit: 1000
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
                        width: 120
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
      render={(data, count) => <AllPostsListTemplate data={data} count={count} />}
    />
  );
}
