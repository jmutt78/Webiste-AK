import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { MDBContainer, MDBCard, MDBCardBody } from "mdbreact";

import { Button } from "react-bootstrap";

import Calendar from "../../../assets/calendar.svg";

export const Root = styled(MDBContainer)`
  padding: 25px 0 25px 0;
  margin: 0 auto 0 auto;
`;

export const Card = styled(MDBCard)`
  margin: 0 auto 0 auto;

  h3 {
    margin-bottom: 30px;
    color: #36454f;
    font-size: 21px;
    line-height: 1.2em;
    text-align: center;
    font-family: "Sf pro display", sans-serif;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  svg {
    text-align: center;
    width: 177px;
    height: 177px;
    margin: 0px 10px 0px 0;
    cursor: pointer;
    filter: invert(46%) sepia(9%) saturate(3109%) hue-rotate(217deg)
      brightness(91%) contrast(91%);
    margin: 25px auto 25px auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-outline-secondary {
    color: #fff;
    border-color: #8062c6 !important;
    color: #8062c6 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export default () => (
  <Root>
    <Card style={{ width: "22rem" }}>
      <MDBCardBody>
        <IconContainer>
          <Calendar />
        </IconContainer>
        <h3>Book Your Appointment Now</h3>
        <ButtonContainer>
          <Link to="/book">
            <Button variant="outline-secondary">BOOK NOW</Button>
          </Link>
        </ButtonContainer>
      </MDBCardBody>
    </Card>
  </Root>
);
