import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/Layout";
import AllPosts from "../components/AllPosts";
import InspirationPosts from "../components/InspirationPosts";
import ToolsPosts from "../components/ToolsPosts";
import PodcastPosts from "../components/PodcastPosts";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heading,
  tags
}) => {

  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <h1 className="title is-size-1">{heading}</h1>
          </div>
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-8">
                      <h3 className="has-text-weight-semibold is-size-2 secondary-font">
                        Latest posts
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/all-posts">
                        View all
                      </Link>
                    </div>
                  </div>
                  <AllPosts />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-8">
                      <h3 className="has-text-weight-semibold is-size-2 secondary-font">
                        Latest on inspiration
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/inspiration">
                        View all
                      </Link>
                    </div>
                  </div>
                  <InspirationPosts />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-8">
                      <h3 className="has-text-weight-semibold is-size-2 secondary-font">
                        Featured free tools
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/tools">
                        View all
                      </Link>
                    </div>
                  </div>
                  <ToolsPosts />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-8">
                      <h3 className="has-text-weight-semibold is-size-2 secondary-font">
                        Featured podcasts
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/podcasts">
                        View all
                      </Link>
                    </div>
                  </div>
                  <PodcastPosts />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                    <div className="column is-8">
                      <h3 className="has-text-weight-semibold is-size-2 secondary-font">
                        Browse all topics and tags
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/tags">
                        View all
                      </Link>
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
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { group } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        tags={group}
      />
    </Layout>
  );
};

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


export default IndexPage;

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
`;
