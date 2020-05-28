import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./projects.scss"

const projects = ({ data }) => {
  const posts = data.allWordpressPost.edges

  function strip_html_tags(str) {
    if (str === null || str === "") return false
    else str = str.toString()
    return str.replace(/<[^>]*>/g, "")
  }

  return (
    <div>
      <Layout>
        <SEO title="Projects" />
        <h1>Projects</h1>
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
                  {node.acf.description &&
                    strip_html_tags(node.acf.description)
                      .substring(0, 300)
                      .concat("...")}
                </p>
                <Link to={"/" + node.slug}>
                  <button className="projects-post-button">
                    Read more <span style={{ fontSize: 30 }}>&#8594;</span>
                  </button>
                </Link>
                <hr className="projects-post-separator" />
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
`

export default projects
