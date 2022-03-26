import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class CodeTagsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tags = data.allMarkdownRemark.group

    return (
      <>
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Browse all code's tags</h2>
        </div>
        <ul className="tags-list">
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/code/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} <span>({tag.totalCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

CodeTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function CodeTags() {
  return (
    <StaticQuery
      query={graphql`
        query CodeTagsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "code-post" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => <CodeTagsTemplate data={data} count={count} />}
    />
  )
}
