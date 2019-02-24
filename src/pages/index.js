import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MTASign from "../components/MTASign";
import tachyons from "tachyons";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hello"
      keywords={[`gatsby`, `application`, `react`, `luis`, `olivar`, `nyu`]}
    />
    <h1>Hello, I'm Luis</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <MTASign label="Prop!" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
