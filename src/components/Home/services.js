import React from "react";
import styled from "styled-components";

import medical from "../../images/medicalEv.jpg";

import { CardDeck, Card } from "react-bootstrap";

export const Root = styled.div`
  padding: 50px;
  h2 {
    text-align: center;
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }
`;

export const CardContainer = styled(Card)`
  background-color: #f7f7f7;
  text-align: center;
  h3 {
    font-family: "brandon-grotesque", Sans-serif;
    font-size: 26px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1.7px;
  }
  p {
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5em;
    letter-spacing: 0px;
  }
`;

export default () => <Root></Root>;
