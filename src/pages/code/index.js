import * as React from "react";

import Layout from "../../components/Layout";
import CodePosts from "../../components/CodePosts";
import CodeTags from "../../components/CodeTags";

export default class CodeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">You are browsing all "Code" Posts</h1>
        </div>
        <div className="container">
          <section className="section">
            <CodePosts />
          </section>
          <section className="section">
            <CodeTags />
          </section>
        </div>
      </Layout>
    );
  }
}
