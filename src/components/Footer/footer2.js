import React from 'react';
import { Link } from 'gatsby';

import { Button } from 'react-bootstrap';

import {
  Root,
  TopContainer,
  CollumnContainer,
  CTAContainer,
  ImageContainer,
  ButtonContainer,
  HoursContainer,
  ServicesContainer,
  SocailContainer,
  BottomContainer,
  FooterContainer,
} from './style';

import logo from '../../images/logo-IHM.jpg';
import FaceBook from '../../../assets/facebook.svg';
import Insta from '../../../assets/instagram.svg';
import Linkedin from '../../../assets/linkedin.svg';
import Mail from '../../../assets/mail.svg';
import Phone from '../../../assets/phone.svg';
import Compass from '../../../assets/compass.svg';

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      <Root>
        <TopContainer>
          <ImageContainer>
            <img
              src={logo}
              width='100'
              height='auto'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </ImageContainer>
          <CTAContainer>
            <h3>Reach a better, healthier, happier state of being.</h3>
          </CTAContainer>
          <ButtonContainer>
            <Link to='/book'>
              <Button variant='outline-secondary'>BOOK NOW</Button>
            </Link>
          </ButtonContainer>
        </TopContainer>
        <CollumnContainer>
          <HoursContainer>
            <div className='wrapper'>
              <h4>Hours of Operation</h4>
              <ul>
                <li>Mon: 1:30PM - 6PM</li>
                <li>Tues: 9AM - 1PM</li>
                <li>Wed: 9AM - 5PM</li>
                <li>Thurs: 9AM - 5PM</li>
                <li>Fri: by appt only</li>
              </ul>
            </div>
          </HoursContainer>
          <ServicesContainer>
            <h4>Services</h4>
            <Link to='/functional-medicine'>
              Functional Medicine Evaluation
            </Link>
            <Link to='/indigo'>INDIGO Quantum Biofeedback</Link>
            <Link to='/stress-energy-healing'>
              Stress & Energy Management/Healing
            </Link>
            <Link to='/detox-foot-bath'>Detox Foot Bath</Link>
            <Link to='/pinpointe-laser-for-fungal-toenails'>
              PinPointe FootLaser for Fungal Toenails
            </Link>
          </ServicesContainer>
          <ServicesContainer>
            <h4>Links</h4>
            <Link to='/about-us'>About Us</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/new-patient'>New Patient</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact-us'>Contact Us</Link>
          </ServicesContainer>
          <SocailContainer>
            <h4>Social</h4>
            <a
              href='https://www.facebook.com/dradrianak/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaceBook />
            </a>
            <a
              href='https://www.linkedin.com/in/adriana-krywiak-dpm-cfmd-qbt-438aa335'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin />
            </a>
            <a
              href='https://www.instagram.com/ihmohio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Insta />
            </a>
            <a href='mailto:drk@ihmohio.com'>
              <Mail />
            </a>
          </SocailContainer>
        </CollumnContainer>
        <BottomContainer>
          <div className='left'>
            <Phone />
            <a href='tel:440-438-3138'>(440) 438-3138</a>
          </div>
          <div className='middle'>
            <Mail />
            <a href='mailto:drk@ihmohio.com'>drk@ihmohio.com</a>
          </div>
          <div className='right'>
            <Compass />
            <a
              href='https://goo.gl/maps/8zxBjHaoKRNAeKXg7'
              target='_blank'
              rel='noopener noreferrer'
            >
              28873 Lorain Rd North Olmsted, OH 44070
            </a>
          </div>
        </BottomContainer>
        <FooterContainer>
          <p>© {getYear()} Integrative Health Management, LLC</p>
          <a
            href='https://jgmsoft.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by JGM Software
          </a>
        </FooterContainer>
      </Root>
    </footer>
  );
};

export default Footer;
