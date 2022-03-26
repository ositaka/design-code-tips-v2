import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class InspirationTagsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tags = data.allMarkdownRemark.group

    return (
      <>
        <div className="section-title">
          <h2 className="title-h2 secondary-font">
            Browse all inspiration's tags
          </h2>
        </div>
        <ul className="tags-list">
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} <span>({tag.totalCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

InspirationTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function InspirationTags() {
  return (
    <StaticQuery
      query={graphql`
        query InspirationTagsQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "inspiration-post" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => (
        <InspirationTagsTemplate data={data} count={count} />
      )}
    />
  )
}
