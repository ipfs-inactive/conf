import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

export default class HighlightedSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <div className={styles.root}>{this.props.children}</div>;
  }
}
