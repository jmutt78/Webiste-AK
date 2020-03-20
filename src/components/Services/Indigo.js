import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";

import indigo from "../../images/indigo.jpg";
import bio from "../../../downloads/biofeedback.pdf";

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

h4 {

    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 20px;
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

a {
  color: #8062c6;
  font-weight: 600;
}
@media screen and (max-width: 579px) {
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.3em;
  }
}

`;

export const ImageContainer = styled(Image)`
  width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

export const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 30px;

  .btn-secondary {
    padding: 0.84rem 2.14rem;
    color: #fff;
    background-color: #8062c6 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
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

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  ul {
    color: #36454f;
    font-size: 18px;
    line-height: 1.5em;
    font-weight: 300;
  }

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  padding-right: 30px;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 0px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  padding-right: 30px;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0px;
  }
`;

export const DiscContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 3px 7px 14px 0 rgba(0, 0, 0, 0.11);
  h4 {
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    text-align: center;
    align-items: center;
    padding: 35px 35px 35px 35px;

    h4 {
      font-size: 19px;
    }

    li {
      font-size: 15px;
    }
  }
`;

export default () => (
  <Root>
    <ImageContainer src={indigo} rounded fluid />
    <h3>
      The revolutionary INDIGO Biofeedback Device was created over a period of
      many years of research and development to combine holistic medicine with
      advanced quantum technology.
    </h3>
    <IntroContainer>
      <h3>
        INDIGO makes it possible to query the body for its most acute and
        chronic needs or stressors, convey this information to the client, and
        then attempt to balance or correct the stressors with focused energetic
        training.
      </h3>
    </IntroContainer>
    <TextContainer>
      <p>
        The main premises of quantum biofeedback are that the body is electrical
        in nature, that it is innately intelligent, that it can heal itself if
        the right conditions or stimuli are provided, and that as the client
        becomes more aware of that which has been unknown to them, they can make
        changes to improve their wellness.
      </p>
      <p>
        Classical biofeedback was developed in the late 1960s by pioneering
        researchers such as Hans Selye, incorporating techniques developed as
        early as the 1920s to reduce stress. It is a modality for stress
        reduction through greater awareness and control of the body and its
        functions. The main object has always been to teach the body how to
        return to a state of homeostasis or balance. Classical modalities
        include finger temperature regulation, GSR (galvanic skin response or
        measuring skin's electrical resistance), EMG (electromyography or muscle
        relaxation), and EEG (electroencephalography or brain wave pattern
        training).
      </p>
      <p>
        Quantum Biofeedback has taken the concept of this feedback loop and
        added three new components: artificial intelligence, use of electrical
        frequency to measure and provide training and a completely holistic
        selection of modalities to deliver that training. The INDIGO operates at
        biological speeds, broadcasting over 11,000 frequencies to the body,
        each associated with a different item (mineral, vitamin, toxin, organ,
        emotion, etc.), recording its reaction to each, and identifying both
        acute and chronic potential imbalances. Clients can then be provided
        information about the results and frequency training signals can be
        activated to attempt a balancing or harmonizing for items of concern.
      </p>
      <p>
        The INDIGO does not replace the care of your doctor or licensed
        healthcare providers. However, by reducing stress, which often causes or
        contributes to illness, it may help the body to begin healing itself
        naturally. Reduce the stress, take the load off the body, assist it to
        better repair itself and give your body a voice. That is what Quantum
        Biofeedback is all about.
      </p>
      <p>
        Quantum Biofeedback equipment includes a laptop, the INDIGO, head
        harness, and limb straps.
      </p>
    </TextContainer>
    <h4>
      People suffering from the following conditions often respond well to
      stress reduction with the INDIGO:
    </h4>
    <Container>
      <LeftContainer>
        <Card>
          <ul>
            <li>Attention Deficit Disorder (ADD)</li>
            <li>Addictions</li>
            <li>Anxiety</li>
            <li>Arthritis</li>
            <li>Back Pain</li>
            <li>Chronic Fatigue</li>
            <li>Chronic Pain</li>
            <li>Depression</li>
            <li>Eating disorders</li>
            <li>Physical Injuries</li>
          </ul>
        </Card>
      </LeftContainer>
      <RightContainer>
        <Card>
          <ul>
            <li>Headaches</li>
            <li>Hypertension</li>
            <li>Immune disorders</li>
            <li>Incontinence</li>
            <li>Infections</li>
            <li>Insomnia</li>
            <li>Learning Disabilities</li>
            <li>Migraine</li>
            <li>Neuralgia</li>
            <li>Unintentional Weight Loss</li>
          </ul>
        </Card>
      </RightContainer>
    </Container>
    <TextContainer>
      <p>
        A Typical Session An initial session with the INDIGO takes approximately
        two hours, which allows for the completion of the intake form as well as
        the Suppression and Obstruction to Cure or "SOC" panel, which identifies
        lifestyle issues and medical history and helps cue the biofeedback
        device to any risks for the client. Once the SOC panel is completed, the
        client is connected to the INDIGO with a head harness and limb straps.
        The device is then calibrated and the main test proceeds for about four
        minutes.
      </p>
      <p>
        When the test is complete, the practitioner reviews the highest risk
        items and begins to attempt correction of priority conditions. This
        process usually begins with balancing of minerals, vitamins, and organs
        to better enable the body to begin healing. The more specialized
        therapies can then be utilized as appropriate and a strategy for future
        sessions can be developed in consultation with the client.
      </p>
      <p>
        Follow-up sessions are approximately one and a half hours and involve a
        review of the "SOC" panel to determine if there have been any lifestyle
        or symptom changes to report.
      </p>
      <ButtonContainer>
        <a href={bio} target="_blank">
          <Button variant="secondary">Learn More</Button>
        </a>
      </ButtonContainer>
    </TextContainer>
    <DiscContainer>
      <p>
        DISCLAIMER: No claims are made of the INDIGO system or its results and
        nothing that the INDIGO Practitioner does, diagnoses or treats any
        illness or disease nor replaces any other treatment. Please consult your
        family medical doctor for the diagnosis or treatment of disease. Please
        also consult your family medical doctor before undertaking any health
        program.
      </p>
    </DiscContainer>
  </Root>
);
