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
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                {post.frontmatter.tags && post.frontmatter.tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <ul className="taglist">
                      {post.frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
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
