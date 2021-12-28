import styled from "styled-components";
import BankLogo from "../assets/Kotak_Mahindra_Bank_logo.png";
import HeroLogo from "../assets/Scenes02.png";
import Barcode from "../assets/PngItem_1202489.png";
import classes from "./Sidebar/Sidebar.module.css";
import React from "react";

const Login = () => {
    return (
        <Body>
            <ParentContainer>
                <LeftContainer>
                    <HeaderContainer>
                        <img src={BankLogo} alt="Kotak Logo" />
                    </HeaderContainer>
                    <HeroImg>
                        <img src={HeroLogo} alt="Kotak Logo" />
                    </HeroImg>
                </LeftContainer>
                <RightContainer>
                    <BarCode>
                        <img src={Barcode} alt="Kotak Logo" />
                    </BarCode>
                    <FormContainer>
                        <FormChild>
                            <h2 style={{color: 'white'}}>Log into Kotak</h2>
                            <p style={{ margin: 0, marginBottom: '40px', color: 'white'}}>Net Banking</p>
                            <label className="input">
                                <input className="input__field" type="text" placeholder=""/>
                                <span className="input__label" style={{ color: 'white' }}>CRN, Username or Card Number</span>
                            </label>
                            <BelowForm>
                                <RememberMe>
                                    <input type="checkbox"/>
                                    <p style={{ color: 'white'}}>Remember Me</p>
                                </RememberMe>
                                <p style={{ color: 'white'}}>Use virtual Keyboard</p>
                            </BelowForm>

                        </FormChild>
                    </FormContainer>
                </RightContainer>
            </ParentContainer>
        </Body>
    )
}

export default Login;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  background: #003874;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const ParentContainer = styled.div`
  height: 90%;
  width: 90%;
  background: white;
  border-radius: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //background: brown;

  img {
    width: 220px;
    height: 90px;
    margin-left: 30px;
    margin-top: 20px;
  }
`;

const LeftContainer = styled.div`
  //background: salmon;
  height: 80%;
  width: 50%;
  margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const HeroImg = styled.div`
  img {
    margin-top: 20px;
    height: 600px;
    width: 600px;
  }
`;

const RightContainer = styled.div`
  background: #003874;
  height: 80%;
  width: 40%;
  margin-right: 50px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 550px;
`;

const BarCode = styled.div`
  margin-top: 50px;
  img {
    height: 150px;
    width: 150px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  //background: chartreuse;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const FormChild = styled.div`
    //background: purple;
    height: 100%;
    width: 80%;
`;

const BelowForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RememberMe = styled.div`
  display: flex;
`;
