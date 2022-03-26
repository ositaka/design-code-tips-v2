import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../components/Layout'
import HomeLatestPosts from '../components/HomeLatestPosts'
import HomeInspirationPosts from '../components/HomeInspirationPosts'
import HomeToolsPosts from '../components/HomeToolsPosts'
import HomePodcastPosts from '../components/HomePodcastPosts'

// eslint-disable-next-line
export const IndexPageTemplate = ({ heading, tags }) => {
  return (
    <div>
      <div className="page-title">
        <h1 className="title-h1">{heading}</h1>
      </div>
      <section className="section">
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Latest posts</h2>
          <Link to="/all-posts" className="section-title-link">
            View all
          </Link>
        </div>
        <HomeLatestPosts />
      </section>
      <section className="section">
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Latest on inspiration</h2>
          <Link to="/inspiration" className="section-title-link">
            View all
          </Link>
        </div>
        <HomeInspirationPosts />
      </section>
      <section className="section">
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Featured free tools</h2>
          <Link to="/tools" className="section-title-link">
            View all
          </Link>
        </div>
        <HomeToolsPosts />
      </section>
      <section className="section">
        <div className="section-title">
          <h2 className="title-h2 secondary-font">Featured podcasts</h2>
          <Link to="/podcasts" className="section-title-link">
            View all
          </Link>
        </div>
        <HomePodcastPosts />
      </section>
      <section className="section">
        <div className="section-title">
          <h2 className="title-h2 secondary-font">
            Browse all topics and tags
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
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { group } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        tags={group}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
