import React from 'react';
import styled from 'styled-components';
import MolloTitle from '../../assets/MolloTitle.svg';
import FullLogo from '../../assets/FullLogo.svg';
import Ellipse from '../../assets/Ellipse.svg';




const Section = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  background: #FFFFFF;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftSide = styled.div`
 width: 50%;
 height: 98%;
 align-items: left;
 align-text: left;

`;


const RightSide = styled.div`
width: 50%;
height: 98%;
margin-top: -250px;
margin-left: 0px
`;

const TitleImage = styled.img`
height: 38px;
width: 147px;
margin-left: 120px;
margin-top: 42px;
margin-right: 1173px;
border-radius: 0px;

`;
const HeadText = styled.h1`
height: 16px;
width: 273px;
margin-left: 117px;
margin-top: 230px;
border-radius: nullpx;
font-family: Roboto;
font-size: 36px;
font-weight: 700;
line-height: 16px;
letter-spacing: 0.01em;
text-align: left;
color: #3C1D59;

`;

const Text = styled.p`
height: 48px;
width: 431px;
margin-left: 120px;
margin-top: 50px;
border-radius: nullpx;
font-family: Abhaya Libre Medium;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;
color: #433D4A;

`;

const FullName = styled.h6`
  height: 16px;
  width: 35px;
  margin-left: 120px;
  margin-top: 50px;
  border-radius: nullpx;
  font-family: Abhaya Libre Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #433D4A;
`;

const FullName2 = styled.h6`
  height: 16px;
  width: 35px;
  margin-left: 120px;
  margin-top: 70px;
  border-radius: nullpx;
  font-family: Abhaya Libre Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #433D4A;
`;


const Carrier2 = styled.input`
  height: 40px;
  width: 350px;
  margin-top: 0px;
  margin-left: 120px;
  border-radius: 4px;
  border: 1px solid #E1E0E2
`;

const Logo = styled.img`
  height: 700px;
  width: 644px;
  margin-left: -10px;
  margin-top: 300px;
  margin-right: 190px;
  margin-bottom: 1000px;
  border-radius: 0px;
`;

const EllipseImage = styled.img`
  height: 152px;
  width: 152px;
  margin-left: 1143px;
  margin-top: 658px;
  border-radius: 0px;
  background: #A6C643;
`;

const Word = styled.p`
  height: 16px;
  width: 169px;
  margin-left: 320px;
  top: 550px;
  border-radius: nullpx;
  font-family: Abhaya Libre Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: center;
`;

const Btn = styled.button`
  height: 56px;
  width: 454px;
  margin-left: 120px;
  margin-top: 30px;
  border-radius: 4px;
  background: #3C1D59;
  color: white;
  cursor: pointer;

`;


function SignIn() {
  return (
    <div>
        <Section>
          <TitleImage src={MolloTitle} alt="" />
          <Container>
            <LeftSide>
              <HeadText>Sign In to Mollo</HeadText>
              <Text>Please enter your Mollo password and the email address associated
                 with your account to sign in.</Text>
                 <FullName>Email</FullName>
                 <Carrier2 placeholder='johndoe@example.com'/>
                 <FullName2>Password</FullName2>
                 <Carrier2 placeholder='******'/>
                 <Word>Forgot Password? <span style={{color:'#3C1D59', fontSize: '18px'}}>Reset it</span></Word>
                 <Btn>Login</Btn>
            </LeftSide>
            <RightSide>
                       <Logo src={FullLogo} alt='logo image' />
                       <EllipseImage src={Ellipse} alt="logo image" />
                    </RightSide>

          </Container>

        </Section>

    </div>
  );
}
export default SignIn;
