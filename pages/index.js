import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Hero from "../components/Home/hero.js";
import Testimonial from "../components/Home/testimonial.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testimonial />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
);

export default IndexPage;
