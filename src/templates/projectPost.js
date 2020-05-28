import React from "react"
import Layout from "../components/layout"

import "./projectPost.scss"

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
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
`

const projectPost = ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <h1>{post.title}</h1>
      <h4>{post.date}</h4>
      <a className="post-link" href={post.acf.github} target="__blank">
        Github
      </a>
      <br />
      <a className="post-link" href={post.acf.produrl} target="__blank">
        Démo
      </a>
      <br />
      <br />
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export default projectPost
