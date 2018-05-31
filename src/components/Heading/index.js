import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

export default class Heading extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["navy-blue", "light-blue", "orange", "white"]),
    level: PropTypes.oneOf(["1", "2", "3"]),
    weight: PropTypes.oneOf(["regular", "bold", "italic"]),
  };

  static defaultProps = {
    color: "white",
    level: "1",
    weight: "regular",
  };

  render() {
    const { level, children, color, weight } = this.props;
    const HeadingComponent = `h${level}`;

    return (
      <HeadingComponent
        className={[
          styles.root,
          styles[`level${level}`],
          styles[color],
          styles[weight],
        ].join(" ")}
      >
        {children}
      </HeadingComponent>
    );
  }
}
