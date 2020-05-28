import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0.5875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="header-title"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
