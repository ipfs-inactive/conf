import React from "react";

import Heading from "../Heading";
import Link from "../Link";

import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import press from "../../assets/press.svg";
import twitter from "../../assets/twitter.svg";

import styles from "./index.css";

const knowMoreLinks = [
  { href: ".", text: "IPFS Conf" },
  { href: "ipfs.html", text: "IPFS Developers Meeting" },
  { href: "libp2p.html", text: "libp2p Developers Meeting" },
];

const contactUsLinks = [
  { icon: twitter, href: "#", text: "Twitter" },
  { icon: email, href: "mailto:conf@ipfs.io", text: "conf@ipfs.io" },
  { icon: phone, href: "#", text: "+1 xxx-xxx-xxxx" },
  {
    icon: press,
    href: "mailto:press@protocol.ai",
    text: "press@protocol.ai",
  },
];

const renderIconFromLink = link => {
  if (!link.icon) return null;

  return (
    <div className={styles.linkIcon}>
      <img src={link.icon} alt={link.text} />
    </div>
  );
};

const renderLinks = links => (
  <div className={styles.linkList}>
    {links.map((link, index) => (
      <div className={styles.link} key={index}>
        {renderIconFromLink(link)}
        <Link href={link.href}>{link.text}</Link>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <div className={styles.root}>
    <Heading level="1" weight="bold" color="light-blue">
      IPFS Conf
    </Heading>

    <div>
      <div className={styles.alignBottom}>
        <Heading level="3" weight="bold" color="light-blue">
          Know more
        </Heading>
      </div>

      {renderLinks(knowMoreLinks)}
    </div>

    <div>
      <div className={styles.alignBottom}>
        <Heading level="3" weight="bold" color="light-blue">
          Contact us
        </Heading>
      </div>

      {renderLinks(contactUsLinks)}
    </div>
  </div>
);

export default Footer;
