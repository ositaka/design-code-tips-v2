import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import AllPosts from "../components/AllPosts";
import InspirationPosts from "../components/InspirationPosts";
import ToolsPosts from "../components/ToolsPosts";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heading,
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
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest posts
                      </h3>
                    </div>
                    <div className="column is-4">
                      <Link to="/posts">
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
                      <h3 className="has-text-weight-semibold is-size-2">
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
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest free tools
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
        </div>
      </section >
    </div >
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
      }
    }
  }
`;
