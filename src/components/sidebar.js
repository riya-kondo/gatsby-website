import React from "react"

import styles from "./component-modules.module.css"

export default ({ children }) => (
  <div className={styles.sidebar}>
    {children}
  </div>
)
