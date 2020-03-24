import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Home/hero";
import Testimonial from "../components/Home/testimonials";
import Services from "../components/Home/services";
import About from "../components/Home/about";
import CTA from "../components/Home/CTA";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Testimonial />
    <CTA />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
);

export default IndexPage;
