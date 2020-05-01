import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import styles from "./component-modules.module.css"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to} style={{ textShadow: "none"}}>{props.children}</Link>
  </li>
)

export default () => (
  <div //className={styles.navbar} style={{backgroundColor: "purple"}} 
    css={css`
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 5rem;
      padding: 1rem;
      margin: 0 auto;
      background-color: purple;
    `}
  >
    <header style={{ marginBottom: "1.5rem" }}>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <h3 style={{ margin: "1rem", display: "inline" }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
  </div>
)
