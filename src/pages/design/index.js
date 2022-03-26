import * as React from 'react'

import Layout from '../../components/Layout'
import DesignPosts from '../../components/DesignPosts'
import DesignTags from '../../components/DesignTags'

export default class DesignIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">You are browsing all "Design" Posts</h1>
        </div>
        <div className="container">
          <section className="section">
            <DesignPosts />
          </section>
          <section className="section">
            <DesignTags />
          </section>
        </div>
      </Layout>
    )
  }
}
