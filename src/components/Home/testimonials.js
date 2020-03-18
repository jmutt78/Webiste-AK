import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon
} from "mdbreact";

export const Root = styled(MDBContainer)`
  padding: 50px 15px 50px 15px;
  background-color: #8062c6;
  border-radius: 25px;
  color: white;
  .carousel-indicators li {
    background-color: white;
  }
  .carousel-indicators {
    bottom: -90px;
  }

  p {
    font-family: "sofia-pro", Sans-serif;
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
  }

  @media (max-width: 575px) {
    border-radius: 0;
    padding: 10px 15px 10px 15px;
    p {
      font-size: 15px;
    }
  }
`;

export default () => {
  return (
    <Root>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={true}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <p>
                <MDBIcon icon="quote-left" /> Dr. K has an amazing gift of
                healing like I've never seen before. I felt a complete relase
                after an energetic healing, unlike anything I've ever
                experienced before. She also did an amazing job on an in grown
                toe nail I had, when I had rather traumatic experience in the
                past. I felt at easy and comfortable. I would highly recommend
                her to anyone with health or emotional difficulties.
              </p>
              <h4 className="font-weight-bold">Scott M.</h4>

              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <p>
                <MDBIcon icon="quote-left" />
                After one detox foot bath I had way more clarity in my mind and
                more energy. I felt much better and decided to stay on top of my
                health and proceed with a few more.
              </p>
              <h4 className="font-weight-bold">Sandi C.</h4>

              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <p>
                <MDBIcon icon="quote-left" /> I have always been a busy and
                energetic person and have multiple plates spinning. As I have
                gotten older I have had a hard time keeping everything from
                running together and it has been taking its toll on me;
                personally and professionally. Dr. Krywiak has shown me simple
                tools to allow myself to take a step back and keep things from
                crashing together. She also helped me to clean up some of the
                chaotic and negative energy around me. Since learning to focus
                myself and cleaning things up, I have been more calm and focused
                , especially in my professional life when chaos is a constant.
                She has given me the tools needed to live a more positive life.
              </p>
              <h4 className="font-weight-bold">Elizabeth W. D.V.M</h4>

              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
              <MDBIcon icon="star" className="orange-text" />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </Root>
  );
};
