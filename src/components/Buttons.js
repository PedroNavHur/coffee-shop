import styled from 'styled-components';
import colors from '../styles/styles';

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

  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

const NavButton = styled.button`
  font-family: 'Roboto', sans-serif;
  background: none;
  border: none;
  border-bottom: 2px solid ${colors.VerveBlack};
  color: ${colors.VerveBlack};

  font-size: 17px;
  font-weight: 400;
  line-height: 27px; 
  letter-spacing: 0.03em;

  cursor: pointer;
  display: flex;
  align-items: center;

  padding-bottom: 5px;

  &:hover:after {
    background: #555;
  }  
`;

export { ContinueButton, NavButton };