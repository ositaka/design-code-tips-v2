import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class AllPostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="cards-list">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id}>
              <div className="card">
                <article className={`post ${post.frontmatter.featuredpost ? 'is-featured' : ''}`} >
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
                </article>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}

AllPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function AllPosts() {
  return (
    <StaticQuery
      query={graphql`
        query AllPostsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { in: ["code-post", "design-post", "podcast-post"] } } }
            limit: 6
          ) {
            edges {
              node {
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
      render={(data, count) => <AllPostsTemplate data={data} count={count} />}
    />
  );
}
