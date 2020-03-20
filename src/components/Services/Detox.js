import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";

import detox from "../../images/detox.jpg";

export const Root = styled.div`
  padding: 0 0 25px 0;
  h3 {
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
    <ImageContainer src={detox} rounded fluid />

    <TextContainer>
      <p>
        Toxins build up in our body over time. This build up compromises our
        immune system and leaves us open to disease. It is also one of the
        reasons we feel run down and tired. Giving your body a break from its
        toxic burden can help you reach a new level of health and vitality. It
        can also help improve your mental clarity, emotional stability, and
        increase stamina and strength.
      </p>
      <p>
        There is a new detox method that can help give your body a break from
        its toxic burden. The BodyGuard Footbath is a foot detoxification method
        very popular with those interested in cleansing toxins out of their
        body. Two devices in one - an ionic body-detoxification system and a
        frequency generator. The ionic system helps pull toxins, chemicals,
        poisons, pesticides, heavy metals, and free radicals from the body as
        the frequency generator works to help eradicate viruses, bacteria,
        fungus, and parasites. As an analog device, the BodyGuard Footbath
        maintains the symmetry of the human body's natural rhythm, resulting in
        an effective and efficient cleanse.
      </p>
      <h3>How it Works</h3>
      <p>
        During a 30-45-minute foot bath, the water is ionized with negatively
        charged ions. These negatively charge attract the positive charged
        toxins in your body pulling them out through your feet. Whatever toxins
        are not removed through your feet in the process are processed through
        your urine and stools during the 72 hours post treatment.
      </p>
      <p>
        During the process you will also place two probes in your hands, or
        place on various parts of your body for a micro-current to pass through.
        One of the probes is positively charged, and the other is negatively
        charged. Microvolts pass from one probe to another. The voltage is
        extremely low (2500 hz and 7.8 volts). Most patients barely notice the
        current. The probes can be used together with the footbath, or
        separately.
      </p>
      <h3>What is in the Bath?</h3>
      <p>
        The two stainless steel plates pass a small current through the water,
        dislodging the covalent electron from the water molecule and setting
        free the hydrogen atom in the form of gas which bubbles to the surface
        of the water. What is left of the water molecule is called a hydroxide
        -- one atom of oxygen and one atom of hydrogen that possesses a negative
        charge. The negative ionic charge that is left in the water quickly
        builds a negative potential which neutralizes the positive polarity of
        the toxins in the body. The toxins that are not naturally removed by way
        of urine, feces and sweat are pulled out immediately in the ionized
        water.
      </p>
      <p>
        The footbath energizes our body with a positive square wave frequency,
        which strengthens our immune system and organs. The flow of electrons
        through the body changes the terrain of our body, which repels
        pathogens, bacteria, fungus, viruses thus allowing our bodies to acquire
        a state of balance and health. The BodyGuard Footbath is unique in that
        the water is charged only with negative ions.
      </p>
      <p>
        Be aware that the BodyGuard has no power to heal you or anyone. It
        simply helps the body eliminate those things that compromise your
        energy.
      </p>
    </TextContainer>
    <h4>Cleansing Benefits of the Body Guard</h4>
    <Container>
      <LeftContainer>
        <Card>
          <ul>
            <li>Increases its cell vitality</li>
            <li>Eliminates microorganisms</li>
            <li>Boots energy</li>
            <li>Balances body Ph acid/alkaline</li>
            <li>Eliminates viruses - flu</li>
            <li>Relaxes more</li>
            <li>Eliminates bad bacteria</li>
            <li>Purifies liver</li>
            <li>Eliminates parasites</li>
            <li>Improves nerve communication</li>

            <li>Speeds body's own healing</li>
            <li>Fights Epstein Barr</li>
            <li>Improves digestion</li>
            <li>Eliminates heavy chemicals</li>
            <li>Heightens clarity of mind</li>
            <li>Eliminates Pharmaceuticals</li>
            <li>Eliminates candida</li>
            <li>Eliminates alcohol buffer</li>
            <li>Eliminates infection</li>
            <li>Releases stress</li>
          </ul>
        </Card>
      </LeftContainer>
      <RightContainer>
        <Card>
          <ul>
            <li>Enhances immune system</li>
            <li>Cleans own lymphatic system</li>
            <li>Purifies blood</li>
            <li>Eliminates worms</li>
            <li>Clears lungs</li>
            <li>Fights Lyme disease</li>
            <li>Clears bronchial tubes</li>
            <li>Fights shingles</li>
            <li>Neutralizes bug bites</li>
            <li>Fights Fibromyalgia</li>

            <li>Heightens its alertness</li>
            <li>Eliminates cavity bacteria</li>
            <li>Detoxifies cells</li>
            <li>Eliminates gum bacteria</li>
            <li>Speeds recovery</li>
            <li>Eliminates eye infection</li>
            <li>Eliminates lactic acid</li>
            <li>Clears toxic lymph nodes</li>
            <li>Speeds athletic recovery</li>
            <li>Strengthens immune system</li>
          </ul>
        </Card>
      </RightContainer>
    </Container>

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
