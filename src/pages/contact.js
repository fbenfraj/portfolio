import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.scss"

const contact = () => {
  return (
    <div>
      <Layout>
        <SEO title="Contact" />
        <h1>Contact</h1>
        <h4>
          Let's chat! I'm open to lots of new opportunities, freelance or a
          fulltime position.
        </h4>
        <form
          className="contact-form"
          method="post"
          action="https://getform.io/f/dcc3c00b-088e-4aaa-96c0-d5b74f586c55"
        >
          <label htmlFor="name">Name</label>
          <input
            className="contact-form-input"
            type="text"
            name="name"
            id="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            className="contact-form-input"
            type="email"
            name="email"
            id="email"
          />
          <br />
          <label htmlFor="subject">Subject</label>
          <input
            className="contact-form-input"
            type="text"
            name="subject"
            id="subject"
          />
          <br />
          <label htmlFor="message">Message</label>

          <textarea
            className="contact-form-input"
            name="message"
            id="message"
            rows="5"
          />
          <div className="contact-form-buttons">
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default contact
