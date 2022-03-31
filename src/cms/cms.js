import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CodePostPreview from './preview-templates/CodePostPreview'
import DesignPostPreview from './preview-templates/DesignPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PodcastPostPreview from './preview-templates/PodcastPostPreview'
import ToolsPostPreview from './preview-templates/ToolsPostPreview'
import SubscribePagePreview from './preview-templates/SubscribePagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('code', CodePostPreview)
CMS.registerPreviewTemplate('design', DesignPostPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('podcasts', PodcastPostPreview)
CMS.registerPreviewTemplate('tools', ToolsPostPreview)
CMS.registerPreviewTemplate('subscribe', SubscribePagePreview)
