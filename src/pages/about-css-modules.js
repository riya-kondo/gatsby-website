import React from "react"

import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Header from "../components/header"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avater} className={styles.avater} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Header headerText="About CSS Modules" />
    <p>CSS Modules are cool</p>
    <User
      username="riya-kondo"
      avater="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm riya kondo. what do you think?"
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy."
    />
  </Container>
)
