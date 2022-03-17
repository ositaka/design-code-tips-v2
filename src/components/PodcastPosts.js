import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from "lodash";
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PodcastPostsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const title = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Podcasts | ${title}`} />
        <section className="section">
          <div className="cards-list">
            {posts &&
              posts.map(({ node: post }) => (
                <Link to={post.fields.slug} >
                  <div className="card" key={post.id}>
                    <div className='post-image'>
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
                    <article className={`post ${post.frontmatter.featuredpost ? 'is-featured' : ''}`} >
                      <h3 className="post-title title-h3">
                        {post.frontmatter.title}
                      </h3>
                      <div className='post-details has-image'>
                        <span className="post-date">
                          {post.frontmatter.date}
                        </span>
                        {post.frontmatter.tags && post.frontmatter.tags.length ? (
                          <ul className="post-tags">
                            {post.frontmatter.tags.map((tag) => (
                              <li key={tag + `tag`}>
                                <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </article>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </>
    )
  }
}

PodcastPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PodcastPosts() {
  return (
    <StaticQuery
      query={graphql`
        query PodcastPostsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "podcast-post" } } }
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
                  link
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <PodcastPostsTemplate data={data} count={count} />}
    />
  );
}
