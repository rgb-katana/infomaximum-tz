import styled from 'styled-components';
import { Car } from '../../graphql/generated';
import React, { FC } from 'react';
import { STATIC_DOMAIN } from '../../shared/variables';
import BleakHeart from '../../assets/bleakheart.svg?react';
import EmptyHeart from '../../assets/emptyheart.svg?react';

const StyledListItem = styled.li`
  position: relative;
`;

const StyledCarImage = styled.img`
  border: 1px solid var(--color-gray-2);
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 15px;
`;

const StyledCarName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const StyledYear = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin-right: 13px;
  color: var(--color-gray-3);
`;

const StyledColor = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  color: var(--color-gray-3);
  margin-bottom: 13px;
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
  margin-right: 15px;

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

// const StyledFavouriteIcon = styl

const Unavailable = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-gray-4);
  color: var(--color-gray-0);

  width: 237px;
  height: 59px;
  z-index: 1;

  font-weight: 500;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
`;

const GroupContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

interface GreyFilterProps {
  $grey: boolean;
}

const GreyFilter = styled.div<GreyFilterProps>`
  position: relative;

  ${(props) =>
    props.$grey &&
    `
    & > img {
      opacity: 0.4;
      border: 1px solid var(--color-gray-2);
    }

    & > * > button {
      background-color: var(--color-gray-2);
      color: var(--color-gray-4);

      &:hover {
        background-color: var(--color-gray-2); /* Adjust to your desired hover background color */
        color: var(--color-gray-4); /* Adjust to your desired hover text color */
      }

      &:active {
        background-color: var(--color-gray-2); /* Adjust to your desired active background color */
        color: var(--color-gray-4); /* Adjust to your desired active text color */
      }

    }
  `}
`;

interface CarItem {
  car: Car;
}

const CarItem: React.FunctionComponent<CarItem> = (props: CarItem) => {
  const { img_src, model, model_year, color, price, availability } = props.car;

  return (
    <StyledListItem>
      {!availability && (
        <Unavailable>
          <p>Нет в наличии</p>
        </Unavailable>
      )}
      <GreyFilter $grey={!availability}>
        <StyledCarImage src={`${STATIC_DOMAIN + img_src}`} />
        <StyledCarName>{model}</StyledCarName>
        <StyledYear>Год: {model_year}</StyledYear>
        <StyledColor>Цвет: {color}</StyledColor>
        <StyledPrice>от {price}</StyledPrice>
        <GroupContainer>
          <StyledBuyButton>Купить</StyledBuyButton>
          {availability && <EmptyHeart style={{ width: 27, height: 24 }} />}
          {!availability && <BleakHeart style={{ width: 27, height: 24 }} />}
        </GroupContainer>
      </GreyFilter>
    </StyledListItem>
  );
};

export default CarItem;
