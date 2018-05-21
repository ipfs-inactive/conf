import React from "react";

import Layout from "../layouts/MainLayout";
import DevMeetings from "../sections/DevMeetings";
import Ipfsconf from "../sections/Ipfsconf";

const IndexPage = () => (
  <Layout>
    <Ipfsconf />

    <DevMeetings />
  </Layout>
);

export default IndexPage;
