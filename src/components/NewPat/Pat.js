import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button, Row, Col, Image } from "react-bootstrap";
import clip from "../../images/clip.jpg";
import form from "../../../downloads/new_patient_form.pdf";

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
`;

export const TextContainer = styled.div`
  display: flex;
  padding-top: 30px;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const LeftContainer = styled.div`
  width: 43%;
  margin-right: 3%;
  padding-right: 0px;
  .btn-secondary {
    color: #fff;
    background-color: #8062c6 !important;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 54%;
  padding-left: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-right: 0%;
    margin-left: 0%;
    padding-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 100%;
  padding: 35px 35px 35px 60px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: 3px 7px 14px 0 rgba(0, 0, 0, 0.11);

  h4 {
    margin-bottom: 25px;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
  }
  ul {
    list-style: none;
  }

  ul li:before {
    content: " ✓ ";
  }
  li {
    margin-bottom: 10px;
    padding-bottom: 10px;

    font-size: 22px;

    text-align: left;
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
    <h3>
      We always welcome new patients and try to offer convenient appointment
      times.
    </h3>
    <ImageContainer src={clip} rounded fluid />
    <RowContainer>
      <Col>
        <h3>
          Please <Link to="/contact-us">contact</Link> our office to schedule an
          appointment or schedule an appointment or
        </h3>
        <ButtonContainer>
          <Link to="/">
            <Button variant="secondary">Book Now</Button>
          </Link>
        </ButtonContainer>
      </Col>
    </RowContainer>
    <TextContainer>
      <LeftContainer>
        <h4>When to Arrive</h4>
        <p>
          Please arrive 15 minutes before your scheduled appointment time to
          complete any forms. We strive to stay on schedule and do not
          double-book our patients. New patients may require as much as 60
          minutes for their initial evaluation depending on their condition.
        </p>
        <h4>Insurance Information</h4>
        <p>
          We participate in most insurance plans. Please feel free to{" "}
          <Link to="/contact-us">contact</Link> our office to verify your
          coverage.
        </p>
        <h4>Patients Forms</h4>
        <p>
          Print and bring in your completed New Patient Information Forms or fax
          them to our office at (440) 438-3139. This step will save you time on
          your initial visit!
        </p>
        <p>
          Click on the button below to access the New Patient Form. After you
          click the button, a browser window will open. After it opens, click on
          the 'PRINT' icon on your Browser. After the form prints, fill it out
          and bring them into our office.
        </p>
        <a href={form} download>
          <Button variant="secondary">Registration Form</Button>
        </a>
        <Link to="/">
          <Button variant="secondary">Privacy Policy</Button>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Card>
          <ul>
            <h4>What to Bring to Your Appointment</h4>
            <li>Insurance card</li>
            <li>Name of your other doctors</li>
            <li>
              List of all current allergies and medications for us to photocopy
              and place in your chart (this is a good idea for all doctors
              appointments and to save you time)
            </li>
            <li>Any online forms you filled out prior to your appointment</li>
            <li>
              Recent medical records or x-rays will be helpful if you are
              seeking a second opinion or transferring your care
            </li>
          </ul>
        </Card>
      </RightContainer>
    </TextContainer>
  </Root>
);
