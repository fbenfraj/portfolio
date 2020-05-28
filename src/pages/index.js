import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import twitterLogo from "../images/twitter.svg"
import linkedinLogo from "../images/linkedin-icon.svg"
import githubLogo from "../images/github.svg"
// import cvLogo from "../images/adobe-acrobat.svg"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <h1 className="home-title">
        I'm Farouk Ben Fraj,
        <br /> a fullstack JavaScript developer.
      </h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <div>
          <a
            href="https://twitter.com/BENFRAJFarouk1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterLogo}
              className="home-socials-logo"
              alt="twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/farouk-benfraj/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinLogo}
              className="home-socials-logo"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/fbenfraj"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} className="home-socials-logo" alt="github" />
          </a>
          {/* TODO */}
          {/* <a href="">
          <img src={cvLogo} className="home-socials-logo" alt="cv" />
        </a> */}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
