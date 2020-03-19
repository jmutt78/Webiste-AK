import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Quote from "../../assets/quote.svg";

import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

export const Root = styled.div`
  font-family: "sofia-pro", Sans-serif;
  padding: 25px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1280px;
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
  display: flex;
  width: 40%;
  margin-right: 2%;
  margin-bottom: 50px;
  margin-left: 2%;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #fff;
  p {
    color: #36454f;
    font-size: 0.9em;
    line-height: 2em;
  }
  h3 {
    margin-bottom: 8px;
    color: #36454f;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Sf pro display", sans-serif;
  }

  svg {
    text-align: center;
    width: 40px;
    height: 40px;

    filter: invert(46%) sepia(9%) saturate(3109%) hue-rotate(217deg)
      brightness(91%) contrast(91%);
    margin: 25px auto 25px auto;
  }

  @media (max-width: 770px) {
    width: 100%;
    margin-right: 0%;
    margin-left: 0%;
  }
`;

export const CardContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const CardChild = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 770px) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const NameChild = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #8062c6;
`;

const testArr = [
  {
    name: "Scott M",
    content: `Dr. K has an amazing gift of healing like I've never seen before. I felt a complete relase after an energetic healing, unlike anything I've ever experienced before. She also did an amazing job on an in grown toe nail I had, when I had rather traumatic experience in the past. I felt at easy and comfortable. I would highly recommend her to anyone with health or emotional difficulties.`
  },
  {
    name: "Sandi C",
    content: `After one detox foot bath I had way more clarity in my mind and more energy. I felt much better and decided to stay on top of my health and proceed with a few more.`
  },
  {
    name: "Elizabeth W. D.V.M",
    content: `I have always been a busy and energetic person and have multiple plates spinning. As I have gotten older I have had a hard time keeping everything from running together and it has been taking its toll on me; personally and professionally. Dr. Krywiak has shown me simple tools to allow myself to take a step back and keep things from crashing together. She also helped me to clean up some of the chaotic and negative energy around me. Since learning to focus myself and cleaning things up, I have been more calm and focused , especially in my professional life when chaos is a constant. She has given me the tools needed to live a more positive life.`
  },
  {
    name: "Beth C",
    content: ` have been diagnosed with diverticulitis and have some chronic sinus issues. I did 3 sessions of the Bodyguard ionic detox foot-bath. I felt much lighter. After 2 sessions, my sinuses felt clearer and I was able to eat foods I normally cannot eat due to the diverticulitis.`
  },
  {
    name: "Glenn P",
    content: `On June 2, 2018, I had a fairly serious bicycle accident during a long distance ride event in Ojai, California. I lost 4 teeth, received several stitches in my top lip and chin, fractured my left elbow and sustained road rash on my face, arms, and knees.

Although I was healing physically I am always willing to try anything to help speed up the process as long as it does not involve medication of any type. After a couple of emails explaining some of the details, we arranged a series of calls. I really had no idea what to expect and was pleasantly surprised when we began to talk. I immediately felt at ease and her questions quickly went from the physical aspect to the emotional. Without feeling any pressure, I was exploring areas from past experiences, feelings, and mindset that I found were affecting my ability to heal physically.

The breathing exercises that she had me do were very relaxing and made it very easy to be in a place of thankfulness and gratefulness. Even over the phone, I was able to pick up on, and feel her energy.With each call my improvement felt like it was accelerating and I can say without a doubt that I would not be feeling as good or healed just a few short weeks later had it not been for her help.

I would absolutely recommend her to anyone that needs assistance with healing whether it be physical, mental, or emotional. Her ability to assess the issue, at the surface and the root cause, is nothing short of amazing.`
  },
  {
    name: "Ellen S",
    content: `I was too busy holding on to the " what-ifs" of what I knew I wanted and what was right. Dr.Krywiak performed a clearing and we discussed and cleared the blockages. Once, I was able to let all of that go, my body and mind were on the path to healing and I've been able to make clearer choices and start down a path again I once left behind.`
  },
  {
    name: "Beth G",
    content: `Energy is a powerful thing. I knew I was harboring something but I didn't know what it was nor did I realize the impact it was having on my every day life. Thankfully Adriana knew exactly what and how to remedy my chaos. With a open and loving heart she worked with me to extract the negative and replace the positive. She taught me about the power of control we have within through self awareness and gave me techniques to assist me along the way. I am forever enlightened and grateful!`
  },
  {
    name: "Keri Sparenga, Artist",
    content: ` had been having a lot of negativity in my life both mentally and physically and the stress was overwhelming. I went to Adrianna for the initial 3 visits to clear my energy. Even if you are a skeptic just try it out. She sat me down, calmly spoke to me about my problems, told me her intentions of clearing out my layers to make room for less anxiety and more positive changes, and then worked at moving the negativity away. I would definitely go again because she makes you feel so comfortable and the service she provides helped me mentally find inner peace and move forward. Whatever your tribulation or affliction Adrianna has the tools to help you through and bring you closure, energy, peace, and an opening for more good things to come.`
  }
];

const Testimonials = () => (
  <Layout>
    <SEO title="Testimonials" />
    <Root className="my-5">
      <h2>Testimonials</h2>
      <hr />
      <CardContainer>
        <CardChild>
          {testArr.map(({ name, content }) => (
            <Card key={name}>
              <MDBCardBody>
                <NameChild>
                  <h3>{name}</h3>
                </NameChild>
                <Quote />
                <p>{content}</p>
              </MDBCardBody>
            </Card>
          ))}
        </CardChild>
      </CardContainer>
    </Root>
  </Layout>
);

export default Testimonials;
