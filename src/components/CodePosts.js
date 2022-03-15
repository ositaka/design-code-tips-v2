import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from "lodash";

class CodePostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const tags = data.allMarkdownRemark.group
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Code | ${title}`} />
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-4" key={post.id}>
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
                    <ul className="taglist">
                      {post.frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </div>
            ))}
          <div className="column is-12">
            <div className="content">
              <div className="columns">
                <div className="column is-8">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Browse all code's tags
                  </h3>
                </div>
              </div>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div >
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
            sort: {order: DESC, fields: [frontmatter___date]}
            filter: {frontmatter: {templateKey: {eq: "code-post"}}}
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
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => <CodePostsTemplate data={data} count={count} />}
    />
  );
}
