import React, { useState } from "react";
import styled from "styled-components";

import { Button, Image, Modal } from "react-bootstrap";

import banner from "../../images/banner_toenail_fungus.jpg";
import foot from "../../images/foot.jpg";
import PinPointVideo from "../../components/Modal/PinPointeVideo.js";

export const Root = styled.div`
  padding: 0 0 25px 0;
h3 {
    text-align center;
    color: #363636;
    font-family: "sofia-pro", Sans-serif;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
}

p {
  color: #36454f;
  font-size: 17px;
  font-weight: 300;

}

a {
  color: #8062c6;
  font-weight: 600;
}
@media screen and (max-width: 579px) {
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.3em;
  }
}

`;

export const ImageContainer = styled(Image)`
  width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const IntroContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(190, 199, 195, 0.6);

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #36454f;
    font-size: 22px;
    line-height: 1.7em;
    font-weight: 300;
  }
  @media screen and (max-width: 579px) {
    h3 {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 1.3em;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  padding-right: 30px;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 0px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  padding-right: 30px;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 3px 7px 14px 0 rgba(0, 0, 0, 0.11);
  h4 {
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    text-align: center;
    align-items: center;
    padding: 35px 35px 35px 35px;

    h4 {
      font-size: 19px;
    }

    li {
      font-size: 15px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  .btn-secondary {
    padding: 0.84rem 2.14rem;
    color: #fff;
    background-color: #8062c6 !important;
    margin: 0;
    font-family: "Sf pro display", sans-serif;
    position: relative;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const DiscContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-top: 1px solid rgba(190, 199, 195, 0.6);
  p {
    margin-top: 30px;
  }
`;

export const QAContainer = styled.div`
  margin-top: 30px;
  p {
    margin-bottom: 1rem;
  }
`;

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Root>
      <ImageContainer src={foot} rounded fluid />
      <IntroContainer>
        <h3>
          Stop suffering the pain and embarrassment of unsightly nail fungus.
          PinPointe FootLaser is the easy and convenient procedure that helps
          turn your discolored and disfigured nails into clearer, healthier
          looking nails.
        </h3>
      </IntroContainer>
      <TextContainer>
        <LeftContainer>
          <ImageContainer src={banner} rounded fluid />
          <p>
            The patented PinPointe FootLaser is a specially designed laser beam
            that goes through the toenail and safely kills the organisms
            embedded in the nail bed that cause Onychomycosis - more commonly
            known as toenail fungus.
          </p>
          <p>
            The procedure requires one or a small number of safe, quick
            treatments with little or no discomfort and is performed as an
            outpatient service with no anesthesia. The gentle laser light beam
            has no effect on healthy tissue and treats only the infected area of
            the toe. No drugs or topical ointments are used, eliminating the
            total-body side effects of traditional oral medications.
          </p>
          <p>
            Clinical studies show that PinPointe FootLaser kills toenail fungus
            and promotes clear nail growth with a single treatment in better
            than 88% of cases. PinPointe FootLaser is safe, effective and most
            patients improve after their first treatment.
          </p>
        </LeftContainer>
        <RightContainer>
          <Card>
            <h4>Learn More About PinPointe FootLaser for Fungal Toenails</h4>

            <ButtonContainer>
              <Button variant="secondary" onClick={handleShow}>
                Watch Video
              </Button>
            </ButtonContainer>
          </Card>
        </RightContainer>
      </TextContainer>
      <QAContainer>
        <h3 style={{ paddingTop: "30px" }}>Frequently Asked Questions</h3>
        <p>
          <strong>How does it work?</strong>
        </p>
        <p>
          The PinPointe FootLaser kills the fungus that lives in and under the
          toenail. The laser light passes through the toenail without causing
          damage to the nail or the surrounding skin. At the time of the
          procedure, the toenail will not become instantly clear - it takes time
          to grow out.
        </p>

        <p>
          <strong>What can your patients expect?</strong>
        </p>
        <p>
          They can expect a consultation with you explaining the procedure to be
          performed and any follow-up visits you prescribe.{" "}
        </p>

        <p>
          <strong>Can the patient expect more than one treatment?</strong>
        </p>
        <p>
          One treatment kills the fungus for most patients. You will determine
          if the patient needs follow-up care.
        </p>

        <p>
          <strong>Is the procedure painful?</strong>
        </p>
        <p>
          Most patients feel no pain. Some may feel a warming sensation and very
          few feel a pinprick.
        </p>

        <p>
          <strong>Is there a recovery period?</strong>
        </p>
        <p>No; just walk in and walk out.</p>

        <p>
          <strong>How long does the procedure take?</strong>
        </p>
        <p>The Footlaser procedure takes less than 30 minutes.</p>

        <p>
          <strong>Will the fungus grow back?</strong>
        </p>
        <p>
          The fungus is killed after one treatment, and typically you can
          recommend care techniques to reduce a recurrence of the infection.
          There is a chance of reinfection because the fungus is present
          everywhere in the environment.
        </p>

        <p>
          <strong>
            When can your patient paint their nails or have a pedicure?
          </strong>
        </p>
        <p>
          They can apply polish immediately after the treatment. It is important
          to inform the patient that they should remove all nail polish and nail
          decorations the day before their treatment.{" "}
        </p>

        <p>
          <strong>What kind of payments can I accept for the procedure?</strong>
        </p>
        <p>
          Credit cards, cash, money orders can be accepted. The patient may also
          use their Medical IRA, Health Savings or Flexible Spending Accounts.
        </p>

        <p>
          <strong>Can the procedure be covered by their insurance? </strong>
          <p>
            If they have a Health Savings Account or Medical IRA, 100% of cost
            can be covered. However, in most situations, this procedure is
            considered aesthetic, and therefore health insurance plans do not
            provide coverage.
          </p>
        </p>

        <p>
          <strong>How long have you been doing this? </strong>
        </p>
        <p>
          Clinical studies began in November 2007 demonstrating over an 88%
          success rate.
        </p>

        <p>
          <strong>Is it FDA cleared? </strong>
        </p>
        <p>Yes, it is cleared by the FDA.</p>

        <p>
          <strong>Who developed this laser procedure? </strong>
        </p>
        <p>
          Leading scientists and medical professionals working together for 20
          years with funding provided by the National Institutes of Health
          developed the technology in the patented PinPointe FootLaser.
        </p>
      </QAContainer>
      <DiscContainer>
        <p>
          *We make every effort to inform you of the most current and newest
          treatments available on this website. Unfortunately, technology
          changes rapidly in health care and in some circumstances our doctors
          may recommend treatments or diagnostic testing different than those
          outlined in our website.
        </p>
      </DiscContainer>
      <Modal show={show} onHide={handleClose} size="lg">
        <PinPointVideo handleClose={handleClose} />
      </Modal>
    </Root>
  );
};
