const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    let codetags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      const isCodePost = edge.node.frontmatter.templateKey == 'code-post'

      if (isCodePost) {
        if (_.get(edge, `node.frontmatter.tags`)) {
          codetags = codetags.concat(edge.node.frontmatter.tags)
        }

      } else {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }

      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    codetags = _.uniq(codetags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
    codetags.forEach((tag) => {
      const tagPath = `/code/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/code-tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createFieldExtension, createTypes } = actions

//   createFieldExtension({
//     name: 'fileByDataPath',
//     extend: () => ({
//       resolve: function (src, args, context, info) {
//         const partialPath = src.featureimage
//         if (!partialPath) {
//           return null
//         }

//         const filePath = path.join(__dirname, 'src/data', partialPath)
//         const fileNode = context.nodeModel.runQuery({
//           firstOnly: true,
//           type: 'File',
//           query: {
//             filter: {
//               absolutePath: {
//                 eq: filePath,
//               },
//             },
//           },
//         })

//         if (!fileNode) {
//           return null
//         }

//         return fileNode
//       },
//     }),
//   })

//   const typeDefs = `
//     type Frontmatter @infer {
//       featureimage: File @fileByDataPath
//     }

//     type MarkdownRemark implements Node @infer {
//       frontmatter: Frontmatter
//     }
//   `
//   createTypes(typeDefs)
// }
