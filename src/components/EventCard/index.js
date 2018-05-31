import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "../Link";

import asterisk from "../../assets/asterisk.svg";

import styles from "./index.css";

class EventCard extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { href, subtitle, title } = this.props;

    return (
      <div className={styles.root}>
        <img className={styles.asterisk} src={asterisk} alt="asterisk" />
        <p className={styles.title}>{title}</p>
        <p>{subtitle}</p>
        <div>
          <Link href={href}>Know more</Link>
        </div>
      </div>
    );
  }
}

export default EventCard;
