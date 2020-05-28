import React from "react"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

const post = ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <h1>{post.title}</h1>
      <h4>{post.date}</h4>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default post
