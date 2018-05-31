import React, { Component } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading";
import EventCard from "../EventCard";

import styles from "./index.css";

class NextEvents extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ),
  };

  render() {
    const { events } = this.props;

    return (
      <div className={styles.root}>
        <Heading level="3" color="light-blue" weight="italic">
          Next Events
        </Heading>
        {events.map(eventData => (
          <EventCard key={eventData.title} {...eventData} />
        ))}
      </div>
    );
  }
}

export default NextEvents;
