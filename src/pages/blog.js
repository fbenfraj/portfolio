import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.scss"

const blog = ({ data }) => {
  const posts = data.allWordpressPost.edges

  function strip_html_tags(str) {
    if (str === null || str === "") return false
    else str = str.toString()
    return str.replace(/<[^>]*>/g, "")
  }

  return (
    <div>
      <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <ul style={{ listStyle: "none" }}>
          {posts.map(({ node }, index) => {
            return (
              <li key={index}>
                <h3 style={{ marginBottom: 5 }}>{node.title}</h3>
                <p
                  style={{
                    marginTop: 3,
                    marginBottom: 5,
                    fontFamily: "Montserrat",
                  }}
                >
                  Published: {node.date}
                </p>
                <p>
                  {strip_html_tags(node.content)
                    .substring(0, 300)
                    .concat("...")}
                </p>
                <Link to={"/" + node.slug}>
                  <button className="blog-post-button">
                    Read more <span style={{ fontSize: 30 }}>&#8594;</span>
                  </button>
                </Link>
                <hr className="blog-post-separator" />
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export const query = graphql`
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
`

export default blog
