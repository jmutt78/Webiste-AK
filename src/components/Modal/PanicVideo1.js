import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const Root = styled.div`
  iframe {
    height: 620px;
    width: 800px;
    resize: both;
    overflow: auto;
  }
  @media screen and (max-width: 991px) {
    iframe {
      height: 500px;
      width: 500px;
      resize: both;
      overflow: auto;
    }
    @media screen and (max-width: 415px) {
      iframe {
        height: 500px;
        width: 400px;
        resize: both;
        overflow: auto;
      }
  }

  @media screen and (max-width: 411px) {
    iframe {
      height: 500px;
      width: 395px;
      resize: both;
      overflow: auto;
    }
}
    @media screen and (max-width: 375px) {
      iframe {
        height: 500px;
        width: 360px;
        resize: both;
        overflow: auto;
      }
  }
  @media screen and (max-width: 360px) {
    iframe {
      height: 500px;
      width: 344px;
      resize: both;
      overflow: auto;
    }
}

@media screen and (max-width: 320px) {
  iframe {
    height: 500px;
    width: 305px;
    resize: both;
    overflow: auto;
  }
}
`;

export default ({ handleClose }) => {
  return (
    <Root>
      <Modal.Header closeButton></Modal.Header>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/B6GPE-WqvCw?start=1&end=156"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Root>
  );
};
