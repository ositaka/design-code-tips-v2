import React from 'react'
import PropTypes from 'prop-types'
import { SubscribePageTemplate } from '../../templates/subscribe-page'

const SubscribePagePreview = ({ entry, widgetFor }) => (
  <SubscribePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SubscribePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SubscribePagePreview
