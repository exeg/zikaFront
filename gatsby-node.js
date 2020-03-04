exports.createPages = async ({ graphql, actions }) => {  
  const { createPage } = actions
  const result = await graphql(
    `
      {
        posts: allStrapiPost {
          edges {
            node {
              strapiId
            }
          }
        }
        authors: allStrapiAuthor {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const posts = result.data.posts.edges;
  const authors = result.data.authors.edges
  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.strapiId}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.node.strapiId,
      },
    })
  })
  authors.forEach((author, index) => {
    createPage({
      path: `/author/${author.node.strapiId}`,
      component: require.resolve("./src/templates/author.js"),
      context: {
        id: author.node.strapiId,
      },
    })
  })

}