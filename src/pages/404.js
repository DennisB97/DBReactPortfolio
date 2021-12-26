import * as React from "react"
import { Link } from "gatsby"


const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  paddingTop: 50,
  paddingLeft: 50,
  maxWidth: 420,
  color: "wheat",
}

const paragraphStyles = {
  marginBottom: 48,
  paddingTop: 50,
  paddingLeft: 50,
}

const NotFoundBodyStyle = {
  backgroundImage: "linear-Gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )"
}

// This page is rendered when browsing something that does not exist
const NotFoundPage = () => {
  return (
    <body style={NotFoundBodyStyle}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        couldn’t find what you were looking for. <br/>
        <Link to="/">Go home</Link>.
      </p>
    </body>
  )
}

export default NotFoundPage
