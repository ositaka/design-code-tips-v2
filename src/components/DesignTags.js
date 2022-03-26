import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

class DesignTagsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const tags = data.allMarkdownRemark.group

    return (
      <>
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Browse all design's tags</h2>
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

DesignTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function DesignTags() {
  return (
    <StaticQuery
      query={graphql`
        query DesignTagsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "design-post" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => <DesignTagsTemplate data={data} count={count} />}
    />
  )
}
