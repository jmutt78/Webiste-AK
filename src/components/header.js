import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Navbar, Nav, NavDropdown, Button, Accordion } from "react-bootstrap";

import logo from "../images/logo-IHM.jpg";

const StyledNav = styled(Navbar)`
  font-family: sofia-pro, sans-serif;
  color: #36454f;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0 auto;

.active {
  color: #8062c6;
  font-weight: 600;
  background-color: white;
}

  .dropdown-toggle.nav-link {
    display: block;
    width: 100%;

    clear: both;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 0px 3px 5px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  a {
    color: #36454f;
  }

  .navbar-toggler-icon {
    @media (max-width: 575px) {
      padding: 10px;
    }
    @media (max-width: 1077px) {
      padding: 10px;
    }
  }

  img {
    margin: 0;
    border-radius: 50%;
    @media (max-width: 575px) {
      padding: 10px;
    }
    @media (max-width: 1077px) {
      padding: 10px;
    }
  }

  .dropdown-menu a {
    color: #36454f;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    background-color: white;
  }

  .dropdown-menu a:hover,
  .dropdown-menu a:focus {
    color: #8062c6;
    font-weight: 600;
    background-color: white;
  }

  .ml-auto {
    @media (max-width: 575px) {
      display: none;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }


.navbar-nav  a:hover,
.navbar-nav a:focus {
  color: #8062c6;
  font-weight: 600;
  background-color: transparent;
}

.acord {
  padding-bottom 30px;
}
  .accordion {
    width: 100%;
    padding: 30px 0 0 0;
    border-bottom: 1px solid #8062c6;

    font-family: sofia-pro, sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;

    @media (min-width: 991px) {
      display: none;
    }
  }
  .menu-collapse {
    width: 100%;
    display: flex;
    background-color: #f9f7ff;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    justify-content: center;
    border-top: 1px solid #8062c6;
    a {
      color: #36454f;
      font-size: 15px;
      font-weight: 500;
    }
  }
  .menu-collapse a:hover,
  .menu-collapse a:focus {
    color: #8062c6;
    font-weight: 600;
    background-color: white;
  }

  @media (max-width: 575px) {
    padding: 0;
  }
  @media (max-width: 1077px) {
    padding: 0;
  }

  button {
    border: 0;
    background: transparent;
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

export const LinkContainer = styled.div`
  display: block;
  width: 100%;
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  padding: 0.5rem 1rem;
`;

const Header = ({ siteTitle }) => {
  const serviceLink = [
    {
      title: "Functional Medicine",
      link: "/functional-medicine"
    },
    {
      title: "INDIGO Quantum Biofeedback",
      link: "/indigo"
    },
    {
      title: "Stress & Energy Management/Healing",
      link: "/stress-energy-healing"
    },
    {
      title: "Detox Foot Bath",
      link: "/detox-foot-bath"
    },
    {
      title: "PinPointe FootLaser for Fungal Toenails",
      link: "/pinpointe-laser-for-fungal-toenails"
    }
  ];

  const otherLink = [
    {
      title: "About Us",
      link: "/about-us"
    },
    {
      title: "Testimonials",
      link: "/testimonials"
    },
    {
      title: "New Patient",
      link: "/new-patient"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "Contact Us",
      link: "/contact-us"
    }
  ];
  return (
    <header>
      <StyledNav bg="transparent" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              width="100"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Accordion>
            <Accordion.Toggle eventKey="1">
              <div className="acord">
                Our Services <i className="arrow down"></i>
              </div>
            </Accordion.Toggle>
            {serviceLink.map(({ title, link }) => (
              <Accordion.Collapse eventKey="1" key={title}>
                <div className="menu-collapse">
                  <Link to={link} activeStyle={{ color: "#8062c6" }}>
                    {title}
                  </Link>
                </div>
              </Accordion.Collapse>
            ))}
          </Accordion>
          {otherLink.map(({ title, link }) => (
            <Accordion key={title}>
              <div className="acord">
                <Link to={link} activeClassName="active">
                  {title}
                </Link>
              </div>
            </Accordion>
          ))}
        </Navbar.Collapse>

        <Nav className="ml-auto">
          <NavDropdown title="Our Services" id="basic-nav-dropdown">
            {serviceLink.map(({ title, link }) => (
              <NavDropdown.Item key={title}>
                <Link to={link} activeStyle={{ color: "#8062c6" }}>
                  {title}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          {otherLink.map(({ title, link }) => (
            <LinkContainer key={title}>
              <Link to={link} activeClassName="active">
                {title}
              </Link>
            </LinkContainer>
          ))}
        </Nav>
        <ButtonContainer>
          <Link to="/book">
            <Button variant="outline-secondary">BOOK NOW</Button>
          </Link>
        </ButtonContainer>
      </StyledNav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
