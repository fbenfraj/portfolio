import React from "react"
import "./Footer.scss"

const phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
}

const footerStyle = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

const Footer = () => {
  return (
    <footer>
      <div style={phantom} />
      <div className="footer" style={footerStyle}>
        {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
