const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

//Nodeが更新・追加された時に動作する
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type=== "MarkdownRemark"){
    //Markdownファイルのノードを得る(トラバースしている)
    const fileNode = getNode(node.parent)
    //Slugの作成処理(return: "/拡張子を除いたファイル名/")
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    //NodeにSlugを追加する
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

//ページの作成処理
exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  //graphql関数はPromiseを返す
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      } 
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug,
      }
    })
  })
}
