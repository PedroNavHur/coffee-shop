import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BaristaIcon } from "../assets/icons/pretty-much-a-barista-desktop.svg"
import { ContinueButton } from "../components/Buttons";
import colors from "../styles/styles";

// Transition Page

const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 165.2px);
  width: 100%;
  background-color: ${colors.BronsonGreen};
  text-align: center;

  @media (max-width: 768px) {
    height: calc(100vh - 155px);
  }
`;

const IconContainer = styled.div`
  font-size: 80px;
  margin-top: 120px;
`;

const Message = styled.div`
  font-family: 'Roboto', sans-serif;
  weight: 400;
  font-size: 28px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${colors.VerveBlack};
  margin-bottom: 120px;

  @media (max-width: 768px) {
    font-size: 16px;
  }  
`;

const Transition = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/brew');
  }

  return (
    <TransitionContainer>
      <IconContainer>
        <BaristaIcon />
      </IconContainer>
      <Message>
        We'll find coffee that's on your level.
      </Message>
      <ContinueButton $visible={true} onClick={handleContinue}>
        CONTINUE
      </ContinueButton>
    </TransitionContainer>
  );
}

export default Transition;