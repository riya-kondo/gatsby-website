import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"

import styles from "./component-modules.module.css"

export default ({ children }) => (
  <div>
    <Navbar/>
    <div className={styles.container}>
      <Sidebar>
        <p>This is text in sidebar</p>
      </Sidebar>
      <div className={styles.main}>
        <div>
        {children}
        </div>
        <Footer/>
      </div>
    </div>
  </div>
)
