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
  padding: 0em 1em;
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

const Nav2 = styled.div`
  background-color: #8062c6;
  padding: 0.5em 1em;
  align-items: center;
  display: flex;
  p {
    margin: 0px 10px 0px 0;
    color: #f79532;
    font-weight: 600;
  }
  svg {
    width: 30px;
    height: auto;
    margin: 0px 10px 0px 0;
    cursor: pointer;

    filter: invert(56%) sepia(84%) saturate(444%) hue-rotate(345deg)
      brightness(101%) contrast(94%);
    @media (max-width: 500px) {
      width: 25px;
      height: auto;
      margin: 0px 10px 0px 0;
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

// TODO:
//Refactor into an arrary for the links and the social icons
// Toupper for text

const Header = ({ siteTitle }) => (
  <header>
    <Nav2>
      <Nav className="ml-auto">
        <p>(440) 438-3138</p>
        <FaceBook />
        <Linkedin />
        <Insta />
        <Mail />
      </Nav>
    </Nav2>
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
