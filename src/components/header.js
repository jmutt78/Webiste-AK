import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import logo from "../images/logo-IHM.jpg";
import FaceBook from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/mail.svg";

const StyledNav = styled(Navbar)`
  color: palevioletred;
  padding: 0.5em 1em;
  margin: 0 auto;

  text-transform: uppercase;
  img {
    margin: 0;
    border-radius: 50%;
  }
  a {
    font-size: 0.813em;
  }
  .dropdown-menu {
    background-color: white;
  }
  .dropdown-menu a:hover,
  .dropdown-menu a:focus {
    color: #8062c6;
    font-weight: 600;
    background-color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
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
  @media (max-width: 575px) {
    display: none;
  }
  @media (max-width: 1077px) {
    display: none;
  }
`;

// TODO:
//Refactor into an arrary for the links and the social icons
// Toupper for text

const Header = ({ siteTitle }) => (
  <header>
    <StyledNav bg="transparent" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="100"
          height="auto"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item>Dr. Krywiak</NavDropdown.Item>
            <NavDropdown.Item>IHM</NavDropdown.Item>
            <NavDropdown.Item>Testimonials</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Our Services" id="basic-nav-dropdown">
            <NavDropdown.Item>Functional Medicine Evaluation</NavDropdown.Item>
            <NavDropdown.Item>INDIGO Quantum Biofeedback</NavDropdown.Item>
            <NavDropdown.Item>
              Stress & Energy Management/Healing
            </NavDropdown.Item>
            <NavDropdown.Item>Detox Foot Bath</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>New Patient</Nav.Link>
          <Nav.Link>Schedule Appointment</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ButtonContainer>
        <Button variant="outline-secondary">BOOK NOW</Button>
      </ButtonContainer>
    </StyledNav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

// <Nav2>
//   <Nav className="ml-auto">
//     <p>(440) 438-3138</p>
//     <FaceBook />
//     <Linkedin />
//     <Insta />
//     <Mail />
//   </Nav>
// </Nav2>
