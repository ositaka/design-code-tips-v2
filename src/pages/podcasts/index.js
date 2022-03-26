import * as React from 'react'

import Layout from '../../components/Layout'
import PodcastPosts from '../../components/PodcastPosts'

export default class PodcastIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title">
          <h1 className="title-h1">You are browsing all "Podcasts"</h1>
        </div>
        <div className="container">
          <PodcastPosts />
        </div>
      </Layout>
    )
  }
}
