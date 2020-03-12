import React from "react";
import styled from "styled-components";

import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import hero from "../../images/hero.jpg";

export const Root = styled.div`
  padding: 0 0 25px 0;
h3 {
    text-align center;
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: #8062c6;
    border-color: #8062c6;
  }
  .btn-secondary:hover,
  .btn-secondary:focus,
  .btn-secondary:active,
  .open > .dropdown-toggle.btn-secondary {
    color: #8062c6;
    background-color: #f79532;
    border-color: #f79532;
  }
`;

export const Hero = styled(Jumbotron)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${hero});

  background-size: cover;
  height: 100%;
  width: auto;
  height: 800px;

  h1 {
    color: white;
    text-align: center;
    padding: 10rem 0 0 0;
    color: #ffffff;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 74px;
    font-weight: 300;
    letter-spacing: 4.1px;
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
    font-style: normal;
    line-height: 1.3em;
    letter-spacing: 1.7px;
    font-weight: 400;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 1.5em;
    margin-left: 0px;
  }
`;

export const AboutRow = styled(Row)`
  padding: 25px 0 0 0;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1140px;
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
`;

export default () => (
  <Root>
    <Hero>
      <h1>PEACE THROUGH HEALTH</h1>
    </Hero>
    <h3>
      You've reached a place where we are here to help you reach a better,
      healthier, happier state of being on all levels.
    </h3>

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
        <Button variant="link">More ></Button>
      </AboutContent>
    </AboutRow>
  </Root>
);

//
// <ButtonContainer>
//   <Button variant="secondary">SEE HOW</Button>
// </ButtonContainer>
//
