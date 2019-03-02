import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MTASign from "../components/MTASign";
//eslint-disable-next-line
import tachyons from "tachyons";

//TO-DO make it so that passing in just a string will result in the component
const IndexPage = () => (
  <Layout>
    <SEO
      title="Hello"
      keywords={[`gatsby`, `application`, `react`, `luis`, `olivar`, `nyu`]}
    />
    <h1>Hello, I'm Luis</h1>
    <div>
      <MTASign
        bullets="HELLO"
        colors={["red", "blue", "green", "purple", "black"]}
        label="Luis Olivar"
        randomColors={1}
      />
      <MTASign
        colors={["red", "blue", "green", "purple", "black"]}
        label="Luis Olivar"
        numBullets={5}
      />
    </div>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
);

export default IndexPage;
