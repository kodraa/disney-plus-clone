import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>

        <CTALogoOne src='/images/cta-logo-one.svg' alt='cta logo one' />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/22, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt='cta logo two' />

      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: top;
  position: relative;
  height: calc(100vh - 70px);

  &:before {
    content: '';
    position: absolute; 
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

`

const CTALogoOne = styled.img``

const SignUp = styled.a`
  width:100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
  margin-bottom: 12px;


  &:hover{
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;

`

const CTALogoTwo = styled.img`
  width: 90%;
`