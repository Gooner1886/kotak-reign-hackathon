import styled from "styled-components";
import BankLogo from "../assets/Kotak_Mahindra_Bank_logo.png";
import HeroLogo from "../assets/Scenes02.png";
import Barcode from "../assets/PngItem_1202489.png";
import React, {useState} from "react";

const Login = (props) => {
    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
      setText(e.target.value);
    }

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
                                <input
                                    className="input__field"
                                    type="text"
                                    onChange={onChangeHandler}
                                    placeholder=""
                                    value={text}/>
                                <span className="input__label" style={{ color: 'white' }}>{props.method}</span>
                            </label>
                            <BelowForm>
                                <RememberMe>
                                    <input style={{width: '20px'}} type="checkbox" />
                                    <p style={{ cursor: 'pointer' }}>Remember Me</p>
                                </RememberMe>
                                <p style={{ textDecoration: 'underline', cursor: 'pointer'}}>Use virtual Keyboard</p>
                            </BelowForm>
                            <p style={{ marginTop: '20px'}}>Forgot Password</p>
                            <p style={{marginTop: '50px'}}>By clicking on ‘Next’, you accept that you have read our
                                Terms & conditions,
                                Privacy Policy
                                and the
                                Tips for Safe Banking.
                            </p>
                            <ButtonContainer>
                                <button style={{ cursor: 'pointer' }} disabled={text === ""}>Next</button>
                            </ButtonContainer>
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
  font-family: 'Roboto',sans-serif;
  
  p {
    color: white;
    margin-top: 6px;
  }
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
  }
`;

const LeftContainer = styled.div`
  //background: salmon;
  height: 90%;
  width: 50%;
  margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const HeroImg = styled.div`
  img {
    height: 700px;
    width: 700px;
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  
  button {
    width: 90px;
    height: 35px;
    background: #FF726F;
    font-size: 17px;
    border: 1px solid #003874;
  }
`;
