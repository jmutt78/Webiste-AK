import React from "react";
import styled from "styled-components";

import { Row, Col } from "react-bootstrap";

export const Root = styled.div`
  padding: 20px 0 0 0;
  h2 {
    text-align: center;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }
  @media (max-width: 575px) {
  }
`;

export const About = styled(Col)`
  p {
    font-family: "questa-grande", Sans-serif;
    font-size: 20px;
    font-style: italic;
  }
  h2 {
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }

  @media (max-width: 575px) {
    width: 100%
    text-align: center;
    h2 {
      font-size: 30px;
    }
  }
`;

export const AboutRow = styled(Row)`
  padding: 25px 0 0 0;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1140px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const AboutContent = styled(Col)`
  p {
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6em;
    letter-spacing: 0.5px;
  }
  .btn-link {
    font-family: "sofia-pro", Sans-serif;
    color: #8062c6;
    font-size: 20px;
    font-weight: 700;
    line-height: 0.4em;
    letter-spacing: 0.2px;
    text-align: left;
  }

  @media (max-width: 575px) {
    min-width: 90%;
    margin: 0px 25px 0px 25px;
    p {
    font-size: 15px;
  }
`;

export default () => (
  <Root>
    <AboutRow>
      <About>
        <p>-About</p>
        <h2>Our Approach</h2>
      </About>
      <AboutContent>
        <p>
          We treat your body as a whole and this includes your foot
          pain/conditions as well as your stress and emotions. Your emotional
          state of being affects you physical health. These are connected. We
          use very specific multidimensional, holistic approaches to help your
          body heal and uplift you to the best place possible and keep you
          there. We will work with you to heal and assist you make changes and
          with this, all around you will change for the better.
        </p>
      </AboutContent>
    </AboutRow>
  </Root>
);
