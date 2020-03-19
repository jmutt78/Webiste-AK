import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/AboutUs/Hero";
import About from "../components/AboutUs/About";
import Dr from "../components/AboutUs/Dr";

export const Root = styled.div`
  font-family: "sofia-pro", Sans-serif;
  padding: 25px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1280px;
  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #8062c6;
    width: 10%;
  }

  h2 {
    text-align: center;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }
`;

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <Hero />
    <Root className="my-5">
      <h2>About us</h2>
      <hr />
      <About />
    </Root>
    <Dr />
  </Layout>
);

export default AboutUs;