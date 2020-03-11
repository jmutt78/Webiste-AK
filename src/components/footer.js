import React from "react";
import styled from "styled-components";

import { Container, Col, Row } from "react-bootstrap";

import SimpleMap from "./google.js";
import logo from "../images/logo.jpg";
import FaceBook from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/mail.svg";

const Social = styled.div`
  padding: 0.5em 1em;
  align-items: center;
  display: flex;

  svg {
    width: 30px;
    height: auto;
    margin: 0px 10px 0px 0;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 25px;
      margin: 0px 10px 0px 0;
      height: auto;
    }
  }
`;

const List = styled.div`
  h3 {
    text-align: center;
  }

  ul {
    list-style-type: none;
  }
`;

const InfoList = styled.div`
  @media (max-width: 500px) {
    padding-top: 15px;
  }
  h3 {
    text-align: center;
  }

  ul {
    text-align: center;
    list-style-type: none;
  }
  li {
    margin: 0;
  }
`;

export const Root = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  border-top: 1px solid #8062c6;
`;

const Footer = () => {
  return (
    <footer>
      <Root>
        <Row>
          <Col sm={2} xl={3}>
            <List>
              <h3>Contact Us</h3>
              <ul>
                <li>Phone: (440) 438-3138</li>
                <li>Addess: 28873 Lorain Rd North Olmsted, OH 44070</li>
                <Social>
                  <FaceBook />
                  <Linkedin />
                  <Insta />
                  <Mail />
                </Social>
              </ul>
            </List>
          </Col>
          <Col>
            <SimpleMap />
          </Col>
          <Col sm={2} xl={3}>
            <InfoList>
              <h3>Information</h3>

              <ul>
                <li>Mon: 9AM - 5PM</li>
                <li>Tues: 9AM - 5PM</li>
                <li>Wed: 9AM - 5PM</li>
                <li>Thurs: 9AM - 5PM</li>
                <li>Fri - Sunday: Closed</li>
              </ul>
            </InfoList>
          </Col>
        </Row>
      </Root>
    </footer>
  );
};

export default Footer;
