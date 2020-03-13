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
  @media (max-width: 575px) {
    h3 {
      text-align: center;
      font-size: 30px;
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

// Hook
function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Services = () => {
  const size = useWindowSize();
  const mobile = size.width <= "975";

  return (
    <Root>
      <ServiceRow>
        <ServiceContent>
          {mobile && (
            <ServiceContent>
              <ImageContainer image={medical} />
            </ServiceContent>
          )}
          <h3>Functional Medicine Evaluation</h3>
          <p>
            A new approach to medicine. Functional medicine focuses on the
            patient as a whole to determine the root causes of diseases. It
            involves processes to evaluate underlying factors that may have to
            do with bodily imbalances and dysfunctions rather than just treating
            the symptoms with multiple medications.
          </p>
        </ServiceContent>
        {!mobile && (
          <ServiceContent>
            <ImageContainer image={medical} />
          </ServiceContent>
        )}
      </ServiceRow>
      <ServiceRow>
        <ServiceContent>
          <ImageContainer image={wellness} />
        </ServiceContent>
        <ServiceContent>
          <h3>INDIGO Quantum Biofeedback</h3>
          <p>
            The Indigo Biofeedback is an extraordinary device that gathers
            information and makes assessments regarding the state of the body,
            health status, condition and stress level in very deep detail. The
            treatment is painless, and patients stay in a comfortable, relaxed
            position. After assessments are made, which begin to occur in the
            first three minutes of a session, the device can recalibrate any
            condition or ailment to allow the body to begin healing.
          </p>
        </ServiceContent>
      </ServiceRow>
      <ServiceRow>
        {mobile && (
          <ServiceContent>
            <ImageContainer image={stress} />
          </ServiceContent>
        )}
        <ServiceContent>
          <h3>Stress & Energy Management/Healing</h3>
          <p>
            How are you handling stress? Do you feel stuck in areas of your
            health? Do you have pain, medical conditions, anxiety, fatigue or
            any condition that is not allowing you the ease of life? In these
            sessions, advanced energetic technologies are used to clean and
            clear out areas of the body and mind that are congested, allowing
            you to release pain/disease and anxiety and allowing you to return
            to health, joy and vitality. This is a no touch technique.
          </p>
        </ServiceContent>
        {!mobile && (
          <ServiceContent>
            <ImageContainer image={stress} />
          </ServiceContent>
        )}
      </ServiceRow>
      <ServiceRow>
        <ServiceContent>
          <ImageContainer image={detox} />
        </ServiceContent>
        <ServiceContent>
          <h3>Detox Foot Bath</h3>
          <p>
            The BodyGuard footbath is a foot detoxification method that helps
            give your body a break from toxins. The ionic footbath helps pull
            toxins, chemicals, poisons, pesticides, heavy metals, and free
            radicals from the body as the probes work to help eradicate viruses,
            bacteria, fungus, and parasites.
          </p>
        </ServiceContent>
      </ServiceRow>
    </Root>
  );
};

export default Services;
