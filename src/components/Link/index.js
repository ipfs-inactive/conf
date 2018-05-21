import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

class Link extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { href, children } = this.props;

    return (
      <a href={href} className={styles.root}>
        {children}
      </a>
    );
  }
}

export default Link;
