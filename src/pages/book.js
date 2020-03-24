import React from "react";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
  @media (max-width: 600px) {
    h2 {
      font-size: 45px;
    }
  }
`;

const Book = () => (
  <Layout>
    <SEO title="Schedule an Appointment" />
    <Root className="my-5">
      <h2>Schedule an Appointment</h2>
      <hr />
      <iframe
        title="appt"
        src="https://app.acuityscheduling.com/schedule.php?owner=16433921"
        width="100%"
        height="1500px"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </Root>
  </Layout>
);

export default Book;
