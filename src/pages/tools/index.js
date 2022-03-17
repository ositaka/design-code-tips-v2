import * as React from "react";

import Layout from "../../components/Layout";
import ToolsPosts from "../../components/ToolsPosts";
import ToolsTags from "../../components/ToolsTags";

export default class ToolsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">You are browsing all "Tools" Posts</h1>
        </div>
        <div className="container">
          <section className="section">
            <ToolsPosts />
          </section>
          <section className="section">
            <ToolsTags />
          </section>
        </div>
      </Layout>
    );
  }
}
