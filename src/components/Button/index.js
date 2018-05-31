import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

export default class Button extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
  };

  static defaultProps = {
    subLabel: "",
  };

  render() {
    const { href, label, subLabel } = this.props;

    return (
      <div>
        <a
          className={styles.root}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.content}>
            <p>{label}</p>
            {subLabel ? <p className={styles.subLabel}>{subLabel}</p> : null}
          </span>
          <div className={styles.shadow} />
        </a>
      </div>
    );
  }
}
