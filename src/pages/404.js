import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>The page you are looking for has been removed or relocated.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="randomized"/>
      <div>
        <Link to="/">Go Back Top Page</Link>
      </div>
    </Layout>
  )
}
