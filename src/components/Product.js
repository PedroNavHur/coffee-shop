import React from 'react';
import styled from 'styled-components';
import colors from '../styles/styles';

import { ReactComponent as TastingNotesIcon } from '../assets/icons/tasting-notes.svg';
import { ReactComponent as RoastLevelIcon } from '../assets/icons/roast-level.svg';
import { ReactComponent as SippingStyleIcon } from '../assets/icons/sipping-style.svg';
import { ReactComponent as BrewMethodIcon } from '../assets/icons/pour-over-desktop.svg';
import ProductImage from '../assets/media/product.png';
import HorizontalImage from '../assets/banners/horizontal.png';
import VerticalImage from '../assets/banners/vertical.png';
import LongVerticalImage from '../assets/banners/long-vertical.png';

const HorizontalBar = styled.img`
  width: 812px;
  height: 2px;
  padding: 30px 0 0 0;
`;

const VerticalBar = styled.img`
  width: 2px;
  height: 274px;
`;

const LongVerticalBar = styled.img`
  width: 2px;
  height: 464px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1200px;
  background-color: rgba(34, 34, 34, 0.05);
`;

const BestMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 36px;
`;

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BestMatchImage = styled.img`
  width: 313px;
  height: auto;
  margin-bottom: 10px;
`;

const BestMatchTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: ${colors.VerveGreen};
`;

const BestMatchPrice = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.06em;
  margin: 0;
  padding: 0;
  color: ${colors.VerveBlack};
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 20px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  margin: 8px;
  width: 100%;

  svg {
    width: 88px;
    height: auto;
    margin: 20px;
  }
`;

const DetailTitle = styled.h4`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  text-align: left;
  letter-spacing: 0.16em;
  color: ${colors.VerveBlack};
  margin: 24px auto 24px 24px;
`;

const DetailText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 1.5;
  letter-spacing: 0;
  text-align: center;
  padding: 0 12px;
  white-space: pre-line;
  color: ${colors.VerveBlack};
`;

const MediumText = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.VerveBlack};
`;

const Product = () => {
  return (
    <ProductContainer>
      <BestMatchContainer>
        <BestMatchTitle>BEST MATCH</BestMatchTitle>
        <BestMatchImage src={ProductImage} alt="Best Match" />
        <MediumText>GUATEMALA COFFEE</MediumText>
        <BestMatchPrice>$20.50</BestMatchPrice>
      </BestMatchContainer>

      <LongVerticalBar src={LongVerticalImage} alt="Long Vertical Bar" />

      <SpecsContainer>
        <Detail>
          <DetailTitle>WHY YOU'LL LOVE IT</DetailTitle>
          <MediumText>If you’ve ever taken a bite from a ripe red apple, <br></br>
          you’ll know the way this coffee tastes. </MediumText>
        </Detail>

        <HorizontalBar src={HorizontalImage} alt="Horizontal Bar" />

        <DetailsContainer>
          <Detail>
            <DetailTitle>TASTING NOTES</DetailTitle>
            <TastingNotesIcon />
            <DetailText>Red Apple, Lemongrass, <br></br>
              Malt Chocolate</DetailText>
          </Detail>

          <VerticalBar src={VerticalImage} alt="Vertical Bar" />

          <Detail>
            <DetailTitle>ROAST LEVEL</DetailTitle>
            <RoastLevelIcon />
            <DetailText>Medium</DetailText>
          </Detail>

          <VerticalBar src={VerticalImage} alt="Vertical Bar" />

          <Detail>
            <DetailTitle>SIPPING STYLE</DetailTitle>
            <SippingStyleIcon />
            <DetailText>Great with milk/cream</DetailText>
          </Detail>

          <VerticalBar src={VerticalImage} alt="Vertical Bar" />

          <Detail>
            <DetailTitle>BREW METHOD</DetailTitle>
            <BrewMethodIcon />
            <DetailText>Brews a delicious cup <br></br> with a pour over</DetailText>
          </Detail>
        </DetailsContainer>
      </SpecsContainer>

    </ProductContainer>
  )
};

export default Product;