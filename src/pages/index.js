import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default () => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby"/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="randomized"/>
  </div>
)
