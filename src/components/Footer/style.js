import styled from "styled-components";

export const Root = styled.div`
  padding: 25px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1200px;
  font-family: "sofia-pro", Sans-serif;
`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
  flex-wrap: wrap;
  border-bottom: 1px solid #8062c6;
  img {
    margin: 0 10px 25px 25px;
    justify-content: center;
    border-radius: 50%;
  }
`;

export const CollumnContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  webkit-box-direction: normal;
`;

export const CTAContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex: 1;
  h3 {
    text-align: center;
    display: block;
    margin-bottom: 0px;
    font-size: 28px;
    line-height: 28px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #8062c6;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

export const HoursContainer = styled.div`
  width: 25%;
  margin-right: 5%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;
  li {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #36454f;
    font-size: 16px;
    line-height: 44px;
    margin-bottom: 0px;
  }
  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }
  .wrapper {
    display: block;
  }
`;

export const ServicesContainer = styled.div`
  width: 25%;
  margin-right: 2%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;

  a {
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #36454f;
    font-size: 16px;
    line-height: 44px;
    text-decoration: none;
    cursor: pointer;
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 30px;

    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }
`;

export const SocailContainer = styled.div`
  width: 8%;
  margin-right: 2%;
  flex: 0 auto;
  display: flex;
  flex-direction: column;

  svg {
    width: 35px;
    height: auto;
    margin: 5px 0px 5px 0;
    cursor: pointer;
    filter: invert(46%) sepia(9%) saturate(3109%) hue-rotate(217deg)
      brightness(91%) contrast(91%);
    @media (max-width: 575px) {
      width: 25px;
      margin: 0px 10px 0px 0;
      height: auto;
    }
  }

  h4 {
    margin-top: 0px;
    margin-bottom: 30px;

    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #8062c6;
  border-bottom: 1px solid #8062c6;

  p {
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 18px;
  }

  svg {
    width: 35px;
    height: auto;
    margin: 5px 10px 5px 0;
    cursor: pointer;
    filter: invert(46%) sepia(9%) saturate(3109%) hue-rotate(217deg)
      brightness(91%) contrast(91%);
    @media (max-width: 575px) {
      width: 25px;
      margin: 0px 10px 0px 0;
      height: auto;
    }
  }

  .left {
    display: flex;
    width: 25%;
    align-items: center;
  }

  .middle {
    display: flex;
    width: 25%;
    justify-content: flex-start;
    align-items: center;
  }

  .right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px none rgba(190, 199, 195, 0.6);
  font-size: 14px;
`;
