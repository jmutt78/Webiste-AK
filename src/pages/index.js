import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/Home/hero";
import Testimonial from "../components/Home/testimonials";
import Services from "../components/Home/services";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testimonial />
    <Services />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
);

export default IndexPage;
