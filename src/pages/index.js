import React from "react";
import { Link } from "gatsby";

import "../styles/main.css";
import SEO from "../components/seo";
import MTASign from "../components/MTASign";
//eslint-disable-next-line
import tachyons from "tachyons";

const IndexPage = () => (
  <>
    <div class="indexHeader">
      <SEO
        title="Hello"
        keywords={[`gatsby`, `application`, `react`, `luis`, `olivar`, `nyu`]}
      />
      <h1>Hello, I'm Luis</h1>
    </div>
    <div
      style={{
        overflow: "hidden",
        paddingLeft: `20%`,
      }}
    >
      <MTASign
        bullets="HELLO"
        colors={["red", "blue", "green", "purple", "black"]}
        label="Luis Olivar"
        randomColors={1}
      />
      <MTASign
        bullets="World"
        colors={["red", "blue", "green", "purple", "black"]}
        label="Luis Olivar"
        randomColors={1}
      />
      <MTASign
        bullets="HELLO"
        colors={["red", "blue", "green", "purple", "black"]}
        label="Luis Olivar"
        randomColors={1}
      />
    </div>
    <div display="block" margin-top="auto">
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </>
);

export default IndexPage;
