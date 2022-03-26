import * as React from 'react'

import Layout from '../../components/Layout'
import AllPostsList from '../../components/AllPostsList'

export default class AllPostsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">
            You are browsing "All Posts" on a list, without any particular order
          </h1>
        </div>
        <div className="container">
          <section className="section">
            <AllPostsList />
          </section>
        </div>
      </Layout>
    )
  }
}
