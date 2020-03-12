import React from "react";
import styled from "styled-components";

import { Container, Col, Row } from "react-bootstrap";

import SimpleMap from "./google.js";
import logo from "../images/logo-IHM.jpg";
import FaceBook from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/mail.svg";

const Social = styled.div`
  padding: 0em 0em;
  align-items: center;
  display: flex;

  svg {
    width: 30px;
    height: auto;
    margin: 0px 10px 0px 0;
    cursor: pointer;
    filter: invert(46%) sepia(9%) saturate(3109%) hue-rotate(217deg)
      brightness(91%) contrast(91%);
    @media (max-width: 575px) {
      width: 25px;
      margin: 0px 10px 0px 0;
      height: auto;
    }
  }
  @media (max-width: 575px) {
    justify-content: center;
  }
`;

const List = styled.div`
  padding-left: 50px;
  img {
    margin: 0 10px 25px 25px;
    justify-content: center;
    border-radius: 50%;
  }
  h3 {
    font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial,
      sans-serif;
    margin: 0 0 10px 25px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style-type: none;
    font-size: 14px;
  }
  li {
    margin: 0 0 10px 0px;
  }
  @media (max-width: 575px) {
    padding: 0px;
    margin: 0 0 20px 0;
    text-align: center;

    img {
      margin: 0 0px 25px 0px;
    }

    h3 {
      margin: 0 0 10px 0;
    }

    ul {
      margin: 0 0 10px 0;
    }
  }
  @media (max-width: 850px) {
    padding-left: 0;
  }
`;

const InfoList = styled.div`
padding-left: 150px;

  h3 {
    font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial,
      sans-serif;
    margin: 0 0 10px 25px;

    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}
  }

  ul {

    list-style-type: none;
    font-weight: 300;
    font-size: 14px;
  }
  li {
    margin: 0;
  }
  @media (max-width: 850px) {
    padding-left: 0;
  }
  @media (max-width: 575px) {
    padding-top: 15px;
    text-align: center;
  }
`;

export const Root = styled.div`
  padding: 3rem 1rem 1.5rem 1rem;
  border-top: 1px solid #8062c6;
`;

const Footer = () => {
  return (
    <footer>
      <Root>
        <Row>
          <Col sm={4} xl={4} lg={4} md={4}>
            <List>
              <img
                src={logo}
                width="100"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
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
          <Col sm={4} xl={4} lg={4} md={4}>
            <SimpleMap />
          </Col>
          <Col sm={4} xl={4} lg={4} md={4}>
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
