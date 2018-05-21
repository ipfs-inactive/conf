import React from "react";

import Section from "../../components/Section";
import HighlightedSection from "../../components/HighlightedSection";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

import styles from "./index.css";

const DevMeetingsSection = () => (
  <Section>
    <HighlightedSection>
      <div className={styles.content}>
        <Heading level="2" weight="bold" color="light-blue">
          IPFS and libp2p Devs Meetings
        </Heading>

        <Heading level="2" color="light-blue">
          Berlin,Germany | July 10-13, 2018
        </Heading>

        <p className={styles.description}>
          We will host two smaller developer meetings in July. These meetings
          are intended for people who are actively contributing to IPFS, libp2p,
          or both. Downstream users of libp2p are also invited. For further
          information and applications
        </p>

        <div className={styles.button}>
          <Button href="ipfs.html" label="IPFS Developers Meeting" />
        </div>
        <div className={styles.button}>
          <Button href="libp2p.html" label="libp2p Developers Meeting" />
        </div>
      </div>
    </HighlightedSection>
  </Section>
);

export default DevMeetingsSection;
