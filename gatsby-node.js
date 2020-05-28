const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "Blog" } } } }
      ) {
        edges {
          node {
            slug
            title
            content
            date(formatString: "MMMM DD, YYYY")
            categories {
              name
            }
          }
        }
      }
    }
  `)

  const projectResult = await graphql(`
    query {
      allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "Project" } } } }
      ) {
        edges {
          node {
            slug
            title
            content
            date(formatString: "MMMM DD, YYYY")
            acf {
              description
              github
              produrl
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/blogPost.js`)
  const projectTemplate = path.resolve(`./src/templates/projectPost.js`)

  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  projectResult.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(projectTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })
}
