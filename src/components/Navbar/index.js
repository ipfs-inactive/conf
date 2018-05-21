import React from "react";

import styles from "./index.css";

const Navbar = () => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <a href="." className={styles.link}>
        IPFS Summit
      </a>
      <a href="libp2p.html" className={styles.link}>
        libp2p Dev meetings
      </a>
      <a href="ipfs.html" className={styles.link}>
        IPFS Dev meetings
      </a>
      <a href="schedule.html" className={styles.link}>
        Schedule
      </a>
      <a href="." className={styles.link}>
        Registration
      </a>
    </div>
  </div>
);

export default Navbar;
