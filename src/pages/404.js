import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {extension: {eq: "jpg"}, dir: {regex: "/404/"}}){
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  const index = Math.floor( Math.random() * data.allFile.edges.length)
  const imageFile = data.allFile.edges[index].node
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>The page you are looking for has been removed or relocated.</p>
      <img src={imageFile.publicURL} alt={imageFile.name} />
      <div>
        <Link to="/">Go Back Top Page</Link>
      </div>
    </Layout>
  )
}
