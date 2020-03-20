import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";
import stress from "../../images/stress.jpg";

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

export const IntroContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(190, 199, 195, 0.6);

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #36454f;
    font-size: 28px;
    line-height: 1.7em;
    font-weight: 300;
  }
  @media screen and (max-width: 579px) {
    h3 {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 1.3em;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(190, 199, 195, 0.6);
`;

export const DiscContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export default () => (
  <Root>
    <ImageContainer src={stress} rounded fluid />
    <IntroContainer>
      <h3>
        Stress is on the rise. How are you navigating through it? Is it having a
        negative impact on you? Are you feeling anxious, fatigued, sick, getting
        common colds frequently or other unresolved conditions? Do you suffer
        from more severe ailments or conditions such as pain, fibromyalgia,
        rheumatoid arthritis or allergies?
      </h3>
    </IntroContainer>
    <TextContainer>
      <p>
        The energy of stress can cause the body to have decreased ability to
        deal with disease and stress. You'd be surprised all the havoc it can
        create in your body, in your life, and in your work. Stress and
        emotional distresses can cause congestion your body, preventing it from
        being able to detoxify and move through its normal functions as it is
        designed to do. Over time this is often the cause of pain, many diseases
        and other health conditions, both mental and physical.
      </p>
      <p>
        Here's the good news... it can all be addressed, improved, even
        completely resolved with the techniques we utilize in our office. This
        can all be improved through a very simple technique that decongests the
        areas. It is life changing and can resolve any system or mindset.
      </p>
      <p>
        The technique consists of a highly evolved and tested system of energy
        medicine that balances, harmonizes and transforms the body's energy
        process. It is a simple, yet powerful and effective system that is based
        on the fundamental principles that the body is self-repairing living
        entity that possess the ability to heal itself. It requires no drugs, no
        gadgets not even physical contact with the subject. Stress energy is
        actually absorbed into our organs, muscles and glands etc. The physical
        ailments first appear as energetic disruptions around us and our
        thoughts before it manifests in the body. This pervasive energy that
        surrounds us will affect our emotions, our ability to handle stress,
        relationships and even our finances. It's been noted that all aspects of
        life improve with this technique, even finances.
      </p>
      <p>
        This energy healing method assists the efficacy of health care. You
        probably already know that energy healing is on the rise and health and
        wellness is on the forefront. According to studies, 40% of patients seek
        alternative medicine as treatment.
      </p>
      <p>
        If your feeling stuck, not getting any better in any aspects of your
        life or health, feeling fatigued or not getting results from
        medications, and going around and round without relief from a condition
        or pain, fatigue or anxiety, this will help. Through a series of
        sessions (3 at minimum must be done) we can clear the energy to help
        dramatically improve every portion of your life.
      </p>
    </TextContainer>
    <DiscContainer>
      <p>
        *DISCLAIMER: The services above do not claim and are not intended to
        replace medical treatments, diagnose, cure, prevent, and treat any
        specific medical, psychological or emotional disease or class of
        diseases. We are stating that these harmonize the frequencies in and
        around the body placing it in a state of optimum energy balance.
      </p>
    </DiscContainer>
  </Root>
);
