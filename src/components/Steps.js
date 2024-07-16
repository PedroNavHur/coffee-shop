import React from 'react';
import styled from 'styled-components';
import colors from '../styles/styles';

// Steps component and css
const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
`;

const Step = styled.div`
  width: 22.5px;
  height: 22.5px;
  border-radius: 50%;

  margin: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700; // check this
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  color: ${(props) => {
    if (props.state === 'default') return colors.VerveBlack;
    return colors.White;
  }};

  background-color: ${(props) => {
    if (props.state === 'current') return colors.SeabrightYellow;
    if (props.state === 'answered') return colors.VerveBlack;
    return colors.White;
  }};

  border: 1.5px solid ${(props) => {
    if (props.state === 'current') return colors.SeabrightYellow;
    return colors.VerveBlack;
  }};

  &:hover {
    background-color: ${colors.VerveGreen};
    border-color: ${colors.VerveGreen};
    color: ${colors.White};
  }
`;

// Takes a list of steps, their state and renders them
// States are the possible states as in the figma design
const Steps = ({ steps }) => {
  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <Step key={index} state={step.state}>
          {index + 1}
        </Step>
      ))}
    </StepsContainer>
  );
}

export default Steps;