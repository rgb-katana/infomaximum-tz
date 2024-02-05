import { Car } from '../../graphql/generated';
import { FunctionComponent } from 'react';
import { STATIC_DOMAIN } from '../../shared/variables';

import BleakHeart from '../../assets/bleakheart.svg?react';

import DarkHeart from '../../assets/darkheart.svg';
import EmptyHeart from '../../assets/emptyheart.svg';

import formatPrice from '../../utils/formatPrice';

import {
  GreyFilter,
  GroupContainer,
  StyledBuyButton,
  StyledCarImage,
  StyledCarName,
  StyledColor,
  StyledHeartButton,
  StyledListItem,
  StyledPrice,
  StyledYear,
  Unavailable,
} from './CarItem.styles';

import { favouriteStore } from '../Favourite/favouriteStore';
import { observer } from 'mobx-react';

export interface ICarItem {
  car: Car;
}

const checkIsCarFavourite: (id: number) => boolean = (id: number) => {
  return favouriteStore.favourites.find(car => car.id === id) !== undefined;
};

const CarItem: FunctionComponent<ICarItem> = ({ car }: ICarItem) => {
  const { img_src, model, model_year, color, price, availability, id } = car;

  const isCarFavourite = checkIsCarFavourite(id);

  const toggleCar = () => {
    isCarFavourite
      ? favouriteStore.removeCar(id)
      : favouriteStore.addCar({ ...car });
  };

  return (
    <StyledListItem>
      {!availability && (
        <Unavailable>
          <p>Нет в наличии</p>
        </Unavailable>
      )}
      <GreyFilter $grey={!availability}>
        <StyledCarImage src={`${STATIC_DOMAIN + img_src}`} alt={`${model}`} />
        <StyledCarName>{model}</StyledCarName>
        <StyledYear>Год: {model_year}</StyledYear>
        <StyledColor>Цвет: {color}</StyledColor>
        <StyledPrice>от ${formatPrice(price)}</StyledPrice>
        <GroupContainer>
          <StyledBuyButton>Купить</StyledBuyButton>
          {availability && (
            <StyledHeartButton onClick={toggleCar}>
              <img
                src={isCarFavourite ? DarkHeart : EmptyHeart}
                alt="Heart Icon"
              />
            </StyledHeartButton>
          )}
          {!availability && <BleakHeart style={{ width: 27, height: 24 }} />}
        </GroupContainer>
      </GreyFilter>
    </StyledListItem>
  );
};

export default observer(CarItem);
