import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class ToolsTagsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tags = data.allMarkdownRemark.group

    return (
      <>
        <>
          <div className="section-title">
            <h2 className="title-h2 secondary-font">Browse all tools's tags</h2>
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
      </>
    )
  }
}

ToolsTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function ToolsTags() {
  return (
    <StaticQuery
      query={graphql`
        query ToolsTagsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "tools-post" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => <ToolsTagsTemplate data={data} count={count} />}
    />
  )
}
