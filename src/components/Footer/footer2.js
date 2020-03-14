import React from "react";
import styled from "styled-components";

import { Button } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  Root,
  TopContainer,
  CollumnContainer,
  CTAContainer,
  ImageContainer,
  ButtonContainer,
  HoursContainer,
  ServicesContainer,
  SocailContainer,
  BottomContainer,
  FooterContainer
} from "./style";

import logo from "../../images/logo-IHM.jpg";
import FaceBook from "../../../assets/facebook.svg";
import Insta from "../../../assets/instagram.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Mail from "../../../assets/mail.svg";
import Phone from "../../../assets/phone.svg";
import Compass from "../../../assets/compass.svg";

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      <Root>
        <TopContainer>
          <ImageContainer>
            <img
              src={logo}
              width="100"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </ImageContainer>
          <CTAContainer>
            <h3>Reach a better, healthier, happier state of being.</h3>
          </CTAContainer>
          <ButtonContainer>
            <Button variant="outline-secondary">BOOK NOW</Button>
          </ButtonContainer>
        </TopContainer>
        <CollumnContainer>
          <HoursContainer>
            <div className="wrapper">
              <h4>Hours of Operation</h4>
              <ul>
                <li>Mon: 9AM - 5PM</li>
                <li>Tues: 9AM - 5PM</li>
                <li>Wed: 9AM - 5PM</li>
                <li>Thurs: 9AM - 5PM</li>
              </ul>
            </div>
          </HoursContainer>
          <ServicesContainer>
            <h4>Services</h4>
            <a>Functional Medicine Evaluation</a>
            <a>INDIGO Quantum Biofeedback</a>
            <a>Stress & Energy Management/Healing</a>
            <a>Detox Foot Bath</a>
          </ServicesContainer>
          <ServicesContainer>
            <h4>Company</h4>
            <a>About Us</a>
            <a>Dr. Krywiak</a>
            <a>Testimonials</a>
          </ServicesContainer>
          <SocailContainer>
            <h4>Social</h4>
            <FaceBook />
            <Linkedin />
            <Insta />
            <Mail />
          </SocailContainer>
        </CollumnContainer>
        <BottomContainer>
          <div className="left">
            <Phone />
            <p>(440) 438-3138</p>
          </div>
          <div className="middle">
            <Mail />
            <a>drk@ihmohio.com</a>
          </div>
          <div className="right">
            <Compass />
            <p>28873 Lorain Rd North Olmsted, OH 44070</p>
          </div>
        </BottomContainer>
        <FooterContainer>
          <p>© {getYear()} Integrative Health Management, LLC</p>
          <p>
            Powered by <a>JGM Sotware</a>
          </p>
        </FooterContainer>
      </Root>
    </footer>
  );
};

export default Footer;
