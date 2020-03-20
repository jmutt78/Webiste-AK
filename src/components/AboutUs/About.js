import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";
import store from "../../images/store.jpg";

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
p {
  color: #36454f;
      font-size: 17px;
      font-weight: 300;

}
`;

export const ImageContainer = styled(Image)`
  width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const RowContainer = styled(Row)`
  display: flex;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 770px) {
    flex-wrap: wrap;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-secondary {
    color: #fff;
    background-color: #8062c6 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  @media (max-width: 770px) {
  }
`;

export default () => (
  <Root>
    <ImageContainer src={store} rounded fluid />
    <h3>
      We are here to help raise our clients to a better state of being and
      health.
    </h3>
    <RowContainer>
      <Col>
        <p>
          Illness, stress, anxiety and negativity have increased with our
          changing times. Many illnesses, body and health conditions, are caused
          by emotions of bitterness in the soul and many life traumas and stress
          can get stored in our organ systems. This can lead to illness, organ
          dysfunction and isolated pain in areas of the body. Our body parts are
          all connected and work as a whole. We seek to provide multidimensional
          approaches and techniques to assists the whole body in healing from
          pain, stress etc to a better state of being and thinking, with limited
          medication use if possible.
        </p>

        <p>
          We take each patient individually and help assist him or her to change
          mindset and use natural supplements to heal as a whole. When
          perception and mindset change, all the circumstances in a person's
          life change. Everything is energy and with the right energy all can
          heal.
        </p>
        <p>
          With the techniques and clearings we use one can experience
          improvement of health, mentally clarity, life quality, decrease
          anxiety, assist medication and supplements to work better and decrease
          use of medication.
        </p>
        <h3>
          We will help you turn on the keys in you that will bring you to the
          best and healthiest highest whole... that you already are!!
        </h3>
        <ButtonContainer>
          <Link to="/contact-us">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </ButtonContainer>
      </Col>
    </RowContainer>
  </Root>
);
