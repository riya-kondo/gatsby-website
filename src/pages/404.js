import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// Webpackに画像ファイルの利用を通知する
import berochan from "../images/404/berochan.jpg"

export default () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>The page you are looking for has been removed or relocated.</p>
      <img src={berochan} alt="ayachan stick outs tongue with sleeping." />
      <div>
        <Link to="/">Go Back Top Page</Link>
      </div>
    </Layout>
  )
}
