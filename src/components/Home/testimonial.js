import React, { useState } from "react";
import styled from "styled-components";

import { Carousel } from "react-bootstrap";

export const Root = styled.div`
  padding: 50px 0 50px 0;
  background-color: #8062c6;
  color: white;
  .carousel-indicators li {
    background-color: white;
  }
  .carousel-indicators {
    bottom: -80px;
  }

  p {
    font-family: "sofia-pro", Sans-serif;
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  padding: 25px 0 0 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1140px;
`;

export default () => {
  return (
    <Root>
      <Carousel>
        <Carousel.Item>
          <Container>
            <h3>Scott M.</h3>

            <p>
              "Dr. K has an amazing gift of healing like I've never seen before.
              I felt a complete relase after an energetic healing, unlike
              anything I've ever experienced before. She also did an amazing job
              on an in grown toe nail I had, when I had rather traumatic
              experience in the past. I felt at easy and comfortable. I would
              highly recommend her to anyone with health or emotional
              difficulties."
            </p>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <h3>Sandi C.</h3>
            <p>
              "After one detox foot bath I had way more clarity in my mind and
              more energy. I felt much better and decided to stay on top of my
              health and proceed with a few more."
            </p>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <h3>Elizabeth W. D.V.M</h3>
            <p>
              "I have always been a busy and energetic person and have multiple
              plates spinning. As I have gotten older I have had a hard time
              keeping everything from running together and it has been taking
              its toll on me; personally and professionally. Dr. Krywiak has
              shown me simple tools to allow myself to take a step back and keep
              things from crashing together. She also helped me to clean up some
              of the chaotic and negative energy around me. Since learning to
              focus myself and cleaning things up, I have been more calm and
              focused , especially in my professional life when chaos is a
              constant. She has given me the tools needed to live a more
              positive life."
            </p>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Root>
  );
};
