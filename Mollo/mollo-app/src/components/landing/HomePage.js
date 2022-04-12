import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import SignIn from '../layout/SignIn';
import SignUp from '../layout/SignUp';
import MolloTitle from '../../assets/MolloTitle.svg';
import FullLogo from '../../assets/FullLogo.svg';
import Ellipse from '../../assets/Ellipse.svg';
import ArrowDown from '../../assets/ArrowDown.svg';
import AppleStore from '../../assets/AppleStore.svg';
import PlayStore from '../../assets/PlayStore.svg';
import Phone from '../../assets/Phone.svg';
import PhoneEllipse  from '../../assets/PhoneEllipse.svg';
import  Payment from  '../../assets/Payment.svg';
import Mtn from '../../assets/Mtn.svg';
import Dstv from '../../assets/Dstv.svg';
import Airtel from '../../assets/Airtel.svg';
import Mobile from '../../assets/Mobile.svg';
// import EllipseImage from '../../assets/EllipseImage';
// import ManImage from '../../assets/ManImage';

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background: #E5E5E5;
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 0px;
  padding: 0px;
  justify-content: center;

`;

const TitleImage = styled.img`
  height: 38px;
  width: 147px;
  margin-left: 120px;
  margin-top: 30px;
  margin-right: 1173px;
  border-radius: 0px;
`;

const UpText1 = styled.p`
  height: 14px;
  width: 74px;
  margin-left: 500px;
  margin-top: -20px;
  border-radius: nullpx;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3C1D59;
`;

const UpText2 = styled.p`
  height: 14px;
  width: 74px;
  margin-left: 650px;
  margin-top: -15px;
  border-radius: nullpx;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3C1D59;
`;

const UpText3 = styled.p`
  height: 14px;
  width: 74px;
  margin-left: 780px;
  margin-top: -15px;
  border-radius: nullpx;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3C1D59;
`;


const Arrow = styled.div`
  height: 16px;
  width: 18px;
  margin-left: 565px;
  margin-top: -30px;
  border-radius: 0px;
  background: black;
`;

const Arrow2 = styled.div`
  height: 16px;
  width: 18px;
  margin-left: 706px;
  margin-top: -30px;
  border-radius: 0px;
  background: black;
`;

const Arrow3 = styled.div`
  height: 16px;
  width: 18px;
  margin-left: 812px;
  margin-top: -33px;
  border-radius: 0px;
  background: black;
`;

const Btn = styled.button`
  height: 16px;
  width: 50px;
  margin-left: 1010px;
  margin-top: -0.50rem;
  border-radius: nullpx;
  font-family: Gilroy-SemiBold;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01em;
  cursor: pointer;
`;

const BtnSignUp = styled.button`
  height: 50px;
  width: 130px;
  margin-left: 1100px;
  margin-top: -0.9000rem;
  border-radius: 4px;
  background: #3C1D59;
  color: #FFFFFF;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
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
`;

const BtnBank = styled.button`
  height: 25px;
  width: 118px;
  margin-left: 120px;
  margin-top: 196px;
  border-radius: 20px;
  background: #F5EBFF;
  align-items: left;
  color: #3C1D59;
  cursor: pointer;
`;

const MainText = styled.h2`
  height: 100px;
  width: 403px;
  margin-left: 120px;
  margin-top: 20px;
  border-radius: nullpx;
  font-family: Gilroy-Bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const Text = styled.p`
  height: 48px;
  width: 507px;
  margin-left: 120px;
  margin-top: 30px;
  border-radius: nullpx;
  text-align: left;
`;

const BtnGetStarted = styled.button`
  height: 50px;
  width: 228px;
  margin-left: 120px;
  margin-top: 20px;
  border-radius: 0px;
  background: #3C1D59;
  color: white;
  cursor: pointer;
`;

const Play = styled.div`
  height: 46px;
  width: 150px;
  margin-left: 120px;
  // margin-top: 30px;
  border-radius: 14px;
  background: #A6C643;
  color: white;

`;

const Apple = styled.div`
height: 46px;
width: 150px;
 margin-left: 30px;
// margin-top: -2px;
border-radius: 14px;
background: #A6C643;
color: white;
`;

const Person = styled.div`
  height: 545px;
  width: 398px;
  margin-left: 880px;
  margin-top: 176px;
  border-radius: 0px;
`;

const Circle = styled.div`
  height: 478px;
  width: 478px;
  margin-left: 823px;
  margin-top: 146px;
  border-radius: 0px;
  background: #E3C6FF;
`;

const Store = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
`;

const Main = styled.div`
  max-width: 100%;
  max-height: 100vh;
  background: #E5E5E5;
`;

const PhoneEllipseIcon = styled.img`
  height: 438px;
  width: 438px;
  margin-left: 132px;
  margin-top: 331px;
  border-radius: 50%;
  background: #F5EBFF;
`;

const PhoneIcnon = styled.img`
  height: 464.0782165527344px;
  width: 213px;
  margin-left: -335px;
  margin-top: 900px;
  border-radius: 20px;
  border: 1px solid #EFEFEF
`;

const PayIcon = styled.div`
  height: 24px;
  width: 110px;
  margin-left: 150px;
  margin-top: 982px;
  border-radius: nullpx;
  font-family: Gilroy-Medium;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #000000;
`;

const IconContainer = styled.div`
  height: 57px;
  width: 227px;
  left: 397px;
  margin-top: 1047px;
  margin-border-radius: 4px;
  background: #FFFFFF;
`;

const MtnWrapper = styled.div`
  height: 34px;
  width: 34px;
  margin-left: 407px;
  margin-top: 1059px;
  border-radius: 0px;
`;

const DstvWrapper = styled.div`
  height: 34px;
  width: 34px;
  margin-left: 407px;
  margin-top: 1059px;
  border-radius: 0px;
`;

const AirtelWrapper = styled.div`
  height: 34px;
  width: 34px;
  margin-left: 407px;
  margin-top: 1059px;
  border-radius: 0px;
`;

const MobileWrapper = styled.div`
  height: 34px;
  width: 34px;
  margin-left: 407px;
  margin-top: 1059px;
  border-radius: 0px;
`;

 function HomePage() {
  return (
    <div>
      <Section>
         <Header>
            <TitleImage src={MolloTitle} alt="" />
              <UpText1>Company</UpText1>
              <Arrow src={ArrowDown} alt="" />
              <UpText2>Features</UpText2>
              <Arrow2 src={ArrowDown} alt="" />
              <UpText3>Help</UpText3>
              <Arrow3 src={ArrowDown} alt="" />
              <Btn><Link to="/signin">Login</Link></Btn>
              <BtnSignUp><Link to="/signup">Sign Up</Link></BtnSignUp>
         </Header>
         <Container>
           <LeftSide>
             <BtnBank>DIGITAL BANK</BtnBank>
             <MainText>All lifestyles can gain from digital banking.</MainText>
             <Text>With a free Mollo, you can unlock the
                   power of money. All of your bills, money
                    transfers, buy airtime can be done i
                    n one spot.</Text>
              <BtnGetStarted><Link to="/signup"></Link>Get Started</BtnGetStarted>
              <Store>
                <Play src={PlayStore} alt="Play Store logo" />
                <Apple src={AppleStore} alt="Play Store logo" />
              </Store>
           </LeftSide>
           <RightSide>
           {/* <Person src={ManImage} alt="" />
           <Circle src={EllipseImage} alt ="" /> */}
           </RightSide>
         </Container>
      </Section>

      <Main>
        <Container>
          <LeftSide>
        <PhoneEllipseIcon src={PhoneEllipse} alt="" />
        <PhoneIcnon src={Phone} alt="" />
        <PayIcon src={Payment} alt="" />
        <IconContainer>
           <MtnWrapper src={Mtn} alt="Mtn logo" />
           <DstvWrapper src={Dstv} alt="Dstv logo" />
           <AirtelWrapper src={Airtel} alt="Airtel logo" />
           <MobileWrapper src={Mobile} alt="Mobile logo" />

        </IconContainer>
        </LeftSide>
        <RightSide>

        </RightSide>
        </Container>



      </Main>

    </div>
  );
}

export default HomePage;
