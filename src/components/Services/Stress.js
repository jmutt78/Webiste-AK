import React, { useState } from "react";
import styled from "styled-components";

import { Row, Image, Modal, Button } from "react-bootstrap";
import stress from "../../images/stress.jpg";
import PanicVideo1 from "../../components/Modal/PanicVideo1.js";
import PanicVideo2 from "../../components/Modal/PanicVideo2.js";

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

ul {
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

  .btn-secondary {
    color: #fff;
    background-color: #8062c6 !important;
    margin-right: 15px;
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
  margin-bottom: 40px;
  padding-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(190, 199, 195, 0.6);

  h3 {
      text-align left;
      color: #363636;
      font-family: "sofia-pro", Sans-serif;
      font-size: 26px;
      font-weight: 300;
      font-style: normal;
      line-height: 1.6em;
      letter-spacing: 1px;
  }
`;

export const DiscContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export default () => {
  const [video1, setVideo1] = useState(false);
  const [video2, setVideo2] = useState(false);

  const handleVideo1Close = () => setVideo1(false);
  const handleVideo1Show = () => setVideo1(true);
  const handleVideo2Close = () => setVideo2(false);
  const handleVideo2Show = () => setVideo2(true);

  return (
    <Root>
      <Modal show={video1} onHide={handleVideo1Close} size="lg">
        <PanicVideo1 handleClose={handleVideo1Close} />
      </Modal>
      <Modal show={video2} onHide={handleVideo2Close} size="lg">
        <PanicVideo2 handleClose={handleVideo2Close} />
      </Modal>
      <ImageContainer src={stress} rounded fluid />
      <h3>Healing starts on the inside</h3>
      <TextContainer>
        <p>
          Energy Healing involves evaluating your chakras, the energy centers
          also known as chi centers. We all have them and they often get out of
          balanced. Although this is not visible to the naked it is often felt.
          Individuals with chronic conditions, diseases, frequent colds often
          have decreased level of chi as compared to healthy individuals. Due to
          blocks in their meridians (the energy “pipelines”) and congested
          chakras.
        </p>
        <p>
          Clearing and removing these blockages and clearing the congestion in
          the chakras, allows the individual to increase their vitality, and
          energy, have less pain, and slow the aging process.
        </p>
        <p>
          Stress affects each of us differently. Some mental and physical
          illness as well as chronic conditions, can stem from childhood or past
          adult traumas; that created negative emotional experiences. Unless we
          get to the root cause of the issue, and work on resolving it, these
          conditions may persist, even though all medical and homeopathic
          measures have been used with suboptimal success.
        </p>
        <p>
          Using a process called Parametis, we can untangle and resolve past
          traumas and emotions that keep one stuck and therefore relieve on
          going issues in the body.
        </p>
        <h3>Why is energy so important?</h3>
        <p>
          We are all energetic/electromagnetic beings. Your heart runs on an
          electrical system all on its own; there’s the proof, if your
          skeptical. Your energy is constantly in motion. It’s what drives you
          to get up every day, and be active and connect with others; without it
          we cease to exist, therefore it needs to be taken care of as well.
          Energy plays a big role in our wellness and health. You know when you
          don’t have energy and feel low.
        </p>

        <h3>How do I know if I have an energy block?</h3>

        <div>
          <ul>
            <li>Excess worry</li>
            <li>Depression</li>
            <li>Fatigue</li>
            <li>Anger</li>
            <li>Resentment</li>
            <li>Anxiety</li>
            <li>
              Experiencing a trauma such as loss of loved one, divorce, abuse
              etc
            </li>
          </ul>
        </div>
        <h3>What do these blockages cause?</h3>
        <p>
          Long standing blockages affect your organ systems including your,
          stomach, intestines, heart, lungs, kidneys and thyroid and can cause
          conditions such as arthritis; or fibromyalgia. Resolving the blockage
          allows the organ system to start clearing and working properly.
        </p>
        <h3>How does this Energy Healing work?</h3>
        <p>
          The technique consists of a highly evolved and tested system of energy
          medicine that balances, harmonizes and transforms the body's energy
          process. It is a simple, yet powerful and effective system that is
          based on the fundamental principles that the body is a self-repairing
          living entity that possesses the ability to heal itself. It requires
          no drugs, no gadgets not even physical contact with the subject.
          Stress energy is actually absorbed into our organs, muscles and glands
          etc.
        </p>

        <p>
          Physical ailments first appear as energetic disruptions around us and
          our thoughts, before manifesting in the body. This pervasive energy
          that surrounds us will affect our emotions, our ability to handle
          stress, our relationships and even our finances. It's been noted that
          all aspects of life improve with this technique, even finances.
        </p>
        <p>
          Its very simple - you sit in a chair or lie down. There is no
          touching. It takes approximately 45 min.
        </p>
        <h3>Panic Healing</h3>
        <p>Check out these great resources from the experts on Pacic Healing</p>
        <ButtonContainer>
          <Button variant="secondary" onClick={handleVideo1Show}>
            Watch Video
          </Button>
          <Button variant="secondary" onClick={handleVideo2Show}>
            Watch Video
          </Button>
        </ButtonContainer>
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
};
