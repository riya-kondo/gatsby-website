import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Hello Gatsby</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="randomized"/>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title + " "}
            <span>
              - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p> 
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
          html
          id
        }
      }
      totalCount
    }
  }
`
