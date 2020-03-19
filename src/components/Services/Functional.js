import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";

import medical from "../../images/medicalEv.jpg";

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

export const TextContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const DiscContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export default () => (
  <Root>
    <h3>Do you feel stuck in areas of your health?</h3>
    <ImageContainer src={medical} rounded fluid />
    <IntroContainer>
      <h3>
        Are you obtaining many diagnostic studies and tests that show normal
        results, but you still don't feel well?
      </h3>
    </IntroContainer>
    <TextContainer>
      <LeftContainer>
        <p>
          Functional medicine is a newer approach to medicine that does not rely
          on the use of many medications. It looks deeper into the root cause of
          a disease. We often combine it with biofeedback and Energy
          Management/Healing.
        </p>
        <p>
          During the initial session, we gather and review all past medical
          history, test results, previous treatments, medications and diagnosis.
          From there, we devise an alternative treatment plan that may include
          different lab work that was not performed in the past to better help
          find the cause for a condition. Very specific supplementation is then
          recommended based on test results.
        </p>
        <p>
          First session is usually 1-2 hours. Follow up sessions are usually
          done every 3-4 months after plan is initiated to evaluate progress of
          improvements.
        </p>
      </LeftContainer>
      <RightContainer>
        <Card>
          <h4>Learn More About Functional Medicine</h4>
          <p>Check out these great resources from the experts</p>
          <ButtonContainer>
            <a
              href="http://www.yourmedicaldetective.com/public/1090.cfm"
              target="_blank"
              class="button color"
            >
              <Button variant="secondary">Watch Video</Button>
            </a>
          </ButtonContainer>
          <ButtonContainer>
            <a
              href="http://www.functionalmedicineuniversity.com/FunctionalMedicineArticle-May2013.pdf"
              target="_blank"
              class="button color"
            >
              <Button variant="secondary">Read More</Button>
            </a>
          </ButtonContainer>
        </Card>
      </RightContainer>
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
