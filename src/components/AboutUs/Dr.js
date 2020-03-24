import React from "react";
import styled from "styled-components";

import dr from "../../images/dr.jpeg";

export const Root = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-right: 0%;
  border-top: 1px solid #8062c6;

  @media (max-width: 767px) {
    min-height: auto;
    flex-wrap: wrap;
  }
`;

export const BioPage = styled.div`
  position: sticky;
  width: 44%;
  min-height: 100px;
  padding-top: 0px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BioWrapper = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  padding: 220px 10% 80px;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #8062c6;
    margin-bottom: 10px;
    line-height: 36px;
  }
  p {
    margin-bottom: 10px;
    font-family: sofia-pro, sans-serif;
    letter-spacing: 2px;
  }

  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const BioImage = styled.div`
  width: 240px;
  height: 240px;
  margin-bottom: 15px;
  border-radius: 100%;
  background-image: url(${props => props.img});
  background-position: 0px 0px;
  background-size: cover;
  border: 1px solid #8062c6;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const BioContent = styled.div`
  width: 56%;
  min-height: 100px;
  padding-top: 220px;
  background-color: #fff;

  @media (max-width: 767px) {
    width: 100%;
    padding-top: 0px;
  }
`;

export const BioContentWrapper = styled.div`
  min-height: 100px;
  padding-right: 10%;
  padding-bottom: 80px;
  padding-left: 10%;

  .biotxtwrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #8062c6;
    color: #36454f;
    font-size: 36px;
    line-height: 36px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const para1 = `Dr. Krywiak is a foot and ankle specialist and is a native of Ohio.
She began her medical journey earning a Bachelor of Science degree
in pre-med/biology at Notre Dame College of Ohio. Dr. Krywiak
graduated from Ohio College of Podiatric Medicine and received
surgical and non-surgical residency training at St. Vincent Charity
Hospital's 3 year program started by the late Dr. Yu. Her training
extends to include wound care. Extensive surgical training was
conducted at more than 10 hospitals and surgical centers in downtown
Cleveland, Akron and surrounding area. She has joined Premier
Physicians in 2010.`;

const para2 = `Dr. Krywiak is a foot and ankle specialist and is a native of Ohio.
She began her medical journey earning a Bachelor of Science degree
in pre-med/biology at Notre Dame College of Ohio. Dr. Krywiak
graduated from Ohio College of Podiatric Medicine and received
surgical and non-surgical residency training at St. Vincent Charity
Hospital's 3 year program started by the late Dr. Yu. Her training
extends to include wound care. Extensive surgical training was
conducted at more than 10 hospitals and surgical centers in downtown
Cleveland, Akron and surrounding area. She has joined Premier
Physicians in 2010.`;
const para3 = `Dr. Krywiak is a foot and ankle specialist and is a native of Ohio.
She began her medical journey earning a Bachelor of Science degree
in pre-med/biology at Notre Dame College of Ohio. Dr. Krywiak
graduated from Ohio College of Podiatric Medicine and received
surgical and non-surgical residency training at St. Vincent Charity
Hospital's 3 year program started by the late Dr. Yu. Her training
extends to include wound care. Extensive surgical training was
conducted at more than 10 hospitals and surgical centers in downtown
Cleveland, Akron and surrounding area. She has joined Premier
Physicians in 2010.`;

export default () => (
  <Root>
    <BioPage>
      <BioWrapper>
        <BioImage img={dr} />
        <h3>Adriana Krywiak DPM, CFMD, QBT</h3>
        <p>Owner</p>
      </BioWrapper>
    </BioPage>
    <BioContent>
      <BioContentWrapper>
        <div className="biotxtwrapper">
          <h3>About Adriana</h3>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
      </BioContentWrapper>
    </BioContent>
  </Root>
);
