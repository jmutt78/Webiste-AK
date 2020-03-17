import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, Row, Col } from "react-bootstrap";

import medical from "../../images/medicalEv.jpg";
import stress from "../../images/stress.jpg";
import detox from "../../images/detox.jpg";
import wellness from "../../images/wellness.jpg";

export const Root = styled.div`
  padding: 50px 0 50px 0;
  h2 {
    padding: 0 0 50px 0;
    text-align: center;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }

  hr {
    border-top: 1.5px solid #8062c6;
    width: 60%;
  }

  h3 {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 20px;
    color: #36454f;
    font-size: 36px;
    line-height: 44px;
  }

  p {
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6em;
    letter-spacing: 0.5px;
  }

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

  @media (max-width: 575px) {
    h3 {
      text-align: center;
      font-size: 30px;
    }

    hr {
      border-top: 1px solid #8062c6;
      width: 100%;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const ServiceRow = styled(Row)`
  padding: 50px 0 50px 0;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1300px;

  @media (max-width: 575px) {
    padding: 10px 0 10px 0;
  }
`;

export const ServiceContent = styled(Col)`
  margin: 0 4rem 0 4rem;
  order: 1;
  @media (max-width: 975px) {
    margin: 10px 0 10px 0;
  }
`;

export const ImageContent = styled(Col)`
  margin: 0 4rem 0 4rem;
  order: 1;
  @media (max-width: 975px) {
    margin: 10px 0 10px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 1005px;
  background-image: url(${props => props.image});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 975px) {
    margin: 15px auto 15px auto;
  }

  @media (max-width: 575px) {
    margin: 15px auto 15px auto;
    width: 300px;
    height: 300px;
  }
`;

const services = [
  {
    title: "Functional Medicine",
    content: `A new approach to medicine. Functional medicine focuses on the
                patient as a whole to determine the root causes of diseases. It
                involves processes to evaluate underlying factors that may have to
                do with bodily imbalances and dysfunctions rather than just treating
                the symptoms with multiple medications.`,
    image: medical,
    button: "Evaluation"
  },
  {
    title: "Indigo Quantum Biofeedback",
    content: ` The Indigo Biofeedback is an extraordinary device that is a looking glass into the body. It gathers information and makes assessments regarding the state of the body, health status, condition and stress level in very deep detail. The treatment is painless, and patients stay in a comfortable, relaxed position. After assessments are made, which begin to occur in the first three minutes of a session, the device can recalibrate any condition or ailment to allow the body to begin healing.
The initial session is approximately 1.5 hours. Follow up sessions are 1 hour.
`,
    image: wellness,
    button: "Indigo"
  },
  {
    title: "Stress & Energy Management/Healing",
    content: `Stress is on the rise. How are you navigating through it? Is it having a negative impact on you? Are you feeling anxious, fatigued, sick, getting common colds frequently or other unresolved conditions? Do you suffer from more severe ailments or conditions such as anxiety, depression, pain, fibromyalgia, rheumatoid arthritis?
The energy of stress can cause the body to have decreased ability to deal with disease and stress.
`,
    image: stress,
    button: "Healing"
  },
  {
    title: "Detox Foot Bath",
    content: `The BodyGuard footbath is a foot detoxification method that helps
    give your body a break from toxins. The ionic footbath helps pull
    toxins, chemicals, poisons, pesticides, heavy metals, and free
    radicals from the body as the probes work to help eradicate viruses,
    bacteria, fungus, and parasites.`,
    image: detox,
    button: "Detox"
  }
];

var arrOfObj = [
  {
    name: "eve"
  },
  {
    name: "john"
  },
  {
    name: "jane"
  }
];

var newresult = services.map(function(el) {
  var o = Object.assign({}, el);
  const value1 = 0;
  const value2 = 1;
  const length = services.length;

  const result = Array.from({ length }).map((e, ndx) =>
    ndx % 2 ? value2 : value1
  );

  o.isActive = 0;
  return o;
});

console.log(arrOfObj);
console.log(newresult);

const Services = () => {
  return (
    <Root>
      {services.map(({ title, content, image, button }) => (
        <ServiceRow>
          <ServiceContent>
            <ImageContainer image={image} />
          </ServiceContent>
          <ServiceContent>
            <h3>{title}</h3>
            <hr />
            <p>{content}</p>
            <Button variant="secondary">Explore {button}</Button>
          </ServiceContent>
        </ServiceRow>
      ))}
    </Root>
  );
};

export default Services;
