import styled from 'styled-components';
import { Car } from '../../graphql/generated';
import React, { FC } from 'react';
import { STATIC_DOMAIN } from '../../shared/variables';

const StyledListItem = styled.li``;

const StyledCarImage = styled.img`
  border: 1px solid var(--color-gray-2);
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 15px;
`;

const StyledCarName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 5px;
`;

const StyledYear = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin-right: 20px;
  color: var(--color-gray-3);
`;

const StyledColor = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin-right: 10px;
  color: var(--color-gray-3);
  margin-bottom: 7px;
`;

const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 15px;
`;

const StyledBuyButton = styled.button`
  background-color: var(--color-purple-default);
  color: var(--color-gray-0);
  width: 254px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

// const StyledFavouriteIcon = styl

interface CarItem {
  car: Car;
}

const CarItem: React.FunctionComponent<CarItem> = (props: CarItem) => {
  const { img_src, model, model_year, color, price } = props.car;
  return (
    <StyledListItem>
      <StyledCarImage src={`${STATIC_DOMAIN + img_src}`} />
      <StyledCarName>{model}</StyledCarName>
      <StyledYear>Год: {model_year}</StyledYear>
      <StyledColor>Цвет: {color}</StyledColor>
      <StyledPrice>от {price}</StyledPrice>
      <StyledBuyButton>Купить</StyledBuyButton>
    </StyledListItem>
  );
};

export default CarItem;
