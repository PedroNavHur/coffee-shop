import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BaristaIcon } from "../assets/icons/pretty-much-a-barista-desktop.svg"
import colors from "../styles/styles";

const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 165.2px);
  width: 100%;
  background-color: ${colors.BronsonGreen};
  text-align: center;
`;

const IconContainer = styled.div`
  font-size: 80px;
`;

const Message = styled.div`
  font-family: 'Roboto', sans-serif;
  weight: 400;
  font-size: 28px;
  line-height: 36.4px;
  text-align: center;
  letter-spacing: 0.84px;
  color: ${colors.VerveBlack};
`;

const ContinueButton = styled.button`
  background-color: ${colors.VerveBlack};
  color: ${colors.White};
  border: none;
  padding: 12px 15px 10px 15px;
  border-radius: 2.55px;
  cursor: pointer;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 18.2px;
  text-align: center;
  letter-spacing: 2.86px;

  &:hover {
    background-color: #333;
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
      <ContinueButton onClick={handleContinue}>
        CONTINUE
      </ContinueButton>
    </TransitionContainer>
  );
}

export default Transition;