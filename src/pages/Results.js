import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import Steps from '../components/Steps';
import Product from '../components/Product';
import { NavButton } from '../components/Buttons';

import colors from '../styles/styles';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${colors.VerveBeige};
  padding: 34px;

  @media (max-width: 768px) {
    padding: 26px 0;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: 0.06em;
  text-align: center;
  color: ${colors.VerveBlack};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 1.5;
  letter-spacing: 0;
  color: ${colors.VerveBlack};

  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;


const steps = [
  { state: 'answered' },
  { state: 'answered' },
  { state: 'answered' },
  { state: 'answered' },
  { state: 'answered' },
  { state: 'answered' }
];

const Results = () => {
  const navigate = useNavigate();

  // Send back to start on Retake Quiz
  const handleRetake = () => {
    navigate('/');
  };

  return (
    <ResultsContainer>
      <Steps steps={steps} />
      <Title>MEET YOUR NEW FAVORITE COFFEE.</Title>
      <Subtitle>
        Here's what we recommend for your busy days, quiet moments, and upcoming adventures.
      </Subtitle>
      <ButtonsContainer>
        <NavButton>Email my results</NavButton>
        <NavButton onClick={handleRetake}>Retake the quiz</NavButton>
      </ButtonsContainer>
      <Product/>
    </ResultsContainer>
  );
};

export default Results;