import * as React from "react";

import Layout from "../../components/Layout";
import InspirationPosts from "../../components/InspirationPosts";
import InspirationTags from "../../components/InspirationTags";

export default class InspirationIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">You are browsing all "Inspiration" Posts</h1>
        </div>
        <div className="container">
          <section className="section">
            <InspirationPosts />
          </section>
          <section className="section">
            <InspirationTags />
          </section>
        </div>
      </Layout>
    );
  }
}
