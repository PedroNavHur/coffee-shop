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

// Product Component to display Best Match and Product Details

const DesktopHorizontalBar = styled.img`
  width: 812px;
  height: 2px;
  padding: 30px 0 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopVerticalBar = styled.img`
  width: 2px;
  height: 274px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLongVerticalBar = styled.img`
  width: 2px;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHorizontalBar = styled.img`
  width: calc(100vw - 48px);
  height: 2px;
  object-fit: cover;

  @media (min-width: 769px) {
    display: none;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1200px;
  background-color: rgba(34, 34, 34, 0.05);
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100vw - 48px);
    margin: 24px;
  }
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

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

const BestMatchImage = styled.img`
  width: 313px;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 282px;
  }
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
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

  @media (max-width: 768px) {
    margin: 0;
    padding: 16px;
    width: calc(100vw - 48px);
    flex-direction: column;
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: row;
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 24px;
    margin: 0;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 24px;
    margin: 0;
  }
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

      <DesktopLongVerticalBar src={LongVerticalImage} alt="Long Vertical Bar" />
      <MobileHorizontalBar src={HorizontalImage} alt="Mobile Horizontal Bar" />

      <SpecsContainer>
        <Detail>
          <DetailTitle>WHY YOU'LL LOVE IT</DetailTitle>
          <MediumText>If you’ve ever taken a bite from a ripe red apple,
            you’ll know the way this coffee tastes. </MediumText>
        </Detail>

        <DesktopHorizontalBar src={HorizontalImage} alt="Horizontal Bar" />
        <MobileHorizontalBar src={HorizontalImage} alt="Mobile Horizontal Bar" />

        <DetailsContainer>
          <Detail>
            <DetailTitle>TASTING NOTES</DetailTitle>
            <DetailContent>
              <TastingNotesIcon />
              <DetailText>Red Apple, Lemongrass, <br></br>
                Malt Chocolate</DetailText>
            </DetailContent>
          </Detail>

          <DesktopVerticalBar src={VerticalImage} alt="Vertical Bar" />
          <MobileHorizontalBar src={HorizontalImage} alt="Mobile Horizontal Bar" />

          <Detail>
            <DetailTitle>ROAST LEVEL</DetailTitle>
            <DetailContent>
              <RoastLevelIcon />
              <DetailText>Medium</DetailText>
            </DetailContent>
          </Detail>

          <DesktopVerticalBar src={VerticalImage} alt="Vertical Bar" />
          <MobileHorizontalBar src={HorizontalImage} alt="Mobile Horizontal Bar" />

          <Detail>
            <DetailTitle>SIPPING STYLE</DetailTitle>
            <DetailContent>
              <SippingStyleIcon />
              <DetailText>Great with milk/cream</DetailText>
            </DetailContent>
          </Detail>

          <DesktopVerticalBar src={VerticalImage} alt="Vertical Bar" />
          <MobileHorizontalBar src={HorizontalImage} alt="Mobile Horizontal Bar" />

          <Detail>
            <DetailTitle>BREW METHOD</DetailTitle>
            <DetailContent>
              <BrewMethodIcon />
              <DetailText>Brews a delicious cup <br></br> with a pour over</DetailText>
            </DetailContent>
          </Detail>
        </DetailsContainer>
      </SpecsContainer>

    </ProductContainer>
  )
};

export default Product;