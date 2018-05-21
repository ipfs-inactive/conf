import React, { Component } from "react";
import PropTypes from "prop-types";

import Navbar from "../../components/Navbar";
import Metadata from "../../components/Metadata";
import Footer from "../../components/Footer";

import "../reset.css";
import styles from "./index.css";

export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.root}>
        <Metadata />

        <div className={styles.content}>
          {this.props.children}

          <Footer />
        </div>
      </div>
    );
  }
}
