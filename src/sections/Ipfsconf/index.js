import React from "react";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import NextEvents from "../../components/NextEvents";
import NextEventsData from "../../data/nextEvents";
import styles from "./index.css";

const Ipfsconf = () => (
  <React.Fragment>
    <Section>
      <div className={styles.main}>
        <Heading level="1" weight="bold">
          IPFS Conf
        </Heading>
        <Heading level="2" weight="italic" color="orange">
          {"Let's make the web faster, safer, and more open"}
        </Heading>
        <Heading level="3" weight="bold">
          <p> November 13-16, 2018</p>
          <p>Lisbon, Portugal</p>
        </Heading>
        <Button href="/#" label="Join us" />
      </div>
      <NextEvents
        events={[
          NextEventsData.ipfsDevMeeting,
          NextEventsData.libp2pDevMeeting,
        ]}
      />
    </Section>
    <Section>
      <div className={styles.description}>
        <Heading level="2" color="light-blue" weight="bold">
          IPFS Conf is a global gathering for builders and users for the
          peer-to-peer, distributed web based on IPFS.
        </Heading>
        <p>
          IPFS Conf is a large, open-registration event for the entire ecosystem
          of people and projects that touch IPFS, libp2p, IPLD and multiformats.
          We welcome anyone interested in these technologies, whether you are
          actively using them already or just want to learn more about them.
          Financial assistance is available.
        </p>
      </div>
      <Button
        href="/#"
        label="Join IPFS Conf"
        subLabel="Lisbon, Nov 13-16, 2018"
      />
    </Section>
  </React.Fragment>
);

export default Ipfsconf;
