import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/styles";
import Steps from "../components/Steps";
import { ContinueButton, NavButton } from "../components/Buttons";

import { ReactComponent as CoffeMakerIcon } from "../assets/icons/coffee-maker-desktop.svg"
import { ReactComponent as FrenchPressIcon } from "../assets/icons/french-press-desktop.svg"
import { ReactComponent as PourOverIcon } from "../assets/icons/pour-over-desktop.svg"
import { ReactComponent as AeroPressIcon } from "../assets/icons/aeropress-desktop.svg"
import { ReactComponent as EspressoIcon } from "../assets/icons/espresso-desktop.svg"
import { ReactComponent as PodsIcon } from "../assets/icons/pods-desktop.svg"
import { ReactComponent as MokaPotIcon } from "../assets/icons/moka-pot-desktop.svg"
import { ReactComponent as BackArrow } from "../assets/icons/back-icon.svg"

// Q2 and Q2Active pages

const BrewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 233.2px);
  width: 100%;
  background-color: ${colors.VerveBeige};
  padding: 34px;

  @media (max-width: 768px) {
    padding: 26px 0;
    height: max-content;
  }
`;

const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 20px 0;

    // Ultimo que quede en el medio
    & > :last-child {
      grid-column: span 2;
      justify-self: center;
    }
  }
`;

const Option = styled.div`
  width: 150px;
  height: 164px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;
  margin-bottom: ${(props) => props.offset}px;
  bottom: 0;
  background-color: ${props => ((props.selected === null || props.selected === props.label) ? props.bgColor : colors.VerveDarkBeige)};
  border-radius: 2px;
  text-align: center;
  color: #000;
  transform: rotate(${props => props.angle}deg);
  cursor: pointer;

  padding-top: 20px;

  &:hover {
    background-color: ${props => props.bgColor};
  }

  svg {
    width: 80px;
    height: 80px;

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 768px) {
    width: 159px;
    height: 130px;

    margin: 5px;
    margin-bottom: 0;
    transform: none;
    padding: 0;
  }
`;

const NavControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: calc(100% - 240px);

  @media (max-width: 768px) {
    max-width: calc(100% - 48px);
    margin-bottom: 20px;
  }
`;


const P3 = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 10px 0 0 0;
  color: ${colors.VerveBlack};

  @media (max-width: 768px) {
    font-size: 14px;
  }  
`;

const options = [
  { bgColor: colors.SeabrightYellow, label: "Coffee Maker", rotation: -12, icon: CoffeMakerIcon, offset: 10 },
  { bgColor: colors.BronsonGreen, label: "French Press", rotation: -8, icon: FrenchPressIcon, offset: 39 },
  { bgColor: colors.SermonPink, label: "Pour Over", rotation: -4, icon: PourOverIcon, offset: 55 },
  { bgColor: colors.BuenaVistaRed, label: "AeroPress", rotation: 0, icon: AeroPressIcon, offset: 60 },
  { bgColor: colors.LatinAmericaBlue, label: "Espresso", rotation: 4, icon: EspressoIcon, offset: 55 },
  { bgColor: colors.Chocolate, label: "Pods", rotation: 8, icon: PodsIcon, offset: 39 },
  { bgColor: colors.Gray1950, label: "Moka Pot", rotation: 12, icon: MokaPotIcon, offset: 10 },
];

// Steps for the enumerated circle progress bar
const steps = [
  { state: 'answered' },
  { state: 'current' },
  { state: 'default' },
  { state: 'default' },
  { state: 'default' },
  { state: 'default' },
]

const Brew = () => {
  // hooks for selected option state and navigation
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // If label is clicked again clear selection
  const handleOptionClick = (label) => {
    setSelectedOption((prev) => (prev === label ? null : label));
  };

  // Navigate to results page
  const handleContinueClick = () => {
    navigate("/results");
  };

  // Navigate back to home page
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <BrewContainer>
      <Steps steps={steps} />
      <Title>HOW DO YOU BREW AT HOME?</Title>
      <OptionsContainer>
        {options.map(({ bgColor, label, rotation, icon: Icon, offset }) => (
          <Option
            key={label}
            bgColor={bgColor}
            label={label}
            angle={rotation}
            offset={offset}
            selected={selectedOption}
            onClick={() => handleOptionClick(label)}
          >
            <Icon />
            <P3>{label}</P3>
          </Option>
        ))}
      </OptionsContainer>
      <ContinueButton $visible={selectedOption} onClick={handleContinueClick}>CONTINUE</ContinueButton>
      <NavControls>
        <NavButton onClick={handleBackClick}>
          <BackArrow />
          &nbsp; Back
        </NavButton>
        <NavButton>
          Why it matters +
        </NavButton>
      </NavControls>
    </BrewContainer>
  );
}

export default Brew;