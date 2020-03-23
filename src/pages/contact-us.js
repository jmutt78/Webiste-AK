import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

import { Button } from "react-bootstrap";

import Calendar from "../../assets/calendar.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import Compass from "../../assets/compass.svg";

export const Root = styled.section`
  padding: 25px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1280px;
  font-family: "sofia-pro", Sans-serif;
  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #8062c6;
    width: 10%;
  }

  h2 {
    text-align: center;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }
`;

export const Card = styled(MDBCard)`
  margin: 0 10px 0 10px;
  width: 16rem;
  height: 16rem;
  a {
    font-family: sofia-pro, sans-serif;
    color: #8062c6;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
  }
  h3 {
    margin-bottom: 30px;
    color: #36454f;
    font-size: 18px;
    line-height: 1.2em;
    text-align: center;
    font-family: "Sf pro display", sans-serif;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  svg {
    text-align: center;
    width: 80px;
    height: 80px;
    margin: 0px 10px 0px 0;

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

export const CardContainer = styled(MDBCol)`
  margin: 10px auto 10px auto;

  @media (max-width: 770px) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

const cardArr = [
  {
    title: "Book Appointment",
    content: (
      <Link to="/book">
        <Button variant="outline-secondary">BOOK NOW</Button>
      </Link>
    ),
    image: <Calendar />
  },
  {
    title: "Visit Us",
    content: (
      <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11969.885388320583!2d-81.940894!3d41.4072858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f79221f3c351936!2sAdriana%20Krywiak%20DPM%2C%20CFMD%2C%20QBT!5e0!3m2!1sen!2sus!4v1584478625048!5m2!1sen!2sus">
        28873 Lorain Rd North Olmsted, OH 44070
      </a>
    ),
    image: <Compass />
  },
  {
    title: "Call Us",
    content: <a href="tel:440-438-3138">(440) 438-3138</a>,
    image: <Phone />
  },
  {
    title: "Email Us",
    content: <a href="mailto:drk@ihmohio.com">drk@ihmohio.com</a>,
    image: <Mail />
  }
];

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Root className="my-5">
      <h2>Contact us</h2>
      <hr />

      <MDBRow>
        <MDBCol lg="6" className="lg-0 mb-4">
          <MDBRow>
            {cardArr.map(({ title, content, image }) => (
              <CardContainer md="6" key={title}>
                <Card>
                  <MDBCardBody>
                    <IconContainer>{image}</IconContainer>
                    <h3>{title}</h3>
                    <ButtonContainer>{content}</ButtonContainer>
                  </MDBCardBody>
                </Card>
              </CardContainer>
            ))}
          </MDBRow>
        </MDBCol>
        <MDBCol lg="5">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "600px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11969.885388320583!2d-81.940894!3d41.4072858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f79221f3c351936!2sAdriana%20Krywiak%20DPM%2C%20CFMD%2C%20QBT!5e0!3m2!1sen!2sus!4v1584478625048!5m2!1sen!2sus"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
        </MDBCol>
      </MDBRow>
    </Root>
  </Layout>
);

export default ContactUs;
