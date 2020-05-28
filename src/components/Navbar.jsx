import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import "./Navbar.scss"

const Navbar = () => {
  const toggleMenu = () => {
    const x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive"
    } else {
      x.className = "topnav"
    }
  }

  return (
    <nav className="topnav" id="myTopnav">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.3rem`,
        }}
      >
        <Link className="topnav-link" activeClassName="active" to="/">
          Home
        </Link>
        <Link className="topnav-link" activeClassName="active" to="/blog">
          Blog
        </Link>
        <Link className="topnav-link" activeClassName="active" to="/projects">
          Projects
        </Link>
        <Link className="topnav-link" activeClassName="active" to="/about">
          About me
        </Link>
        <Link className="topnav-link" activeClassName="active" to="/contact">
          Contact
        </Link>
        <button className="topnav-link icon" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
