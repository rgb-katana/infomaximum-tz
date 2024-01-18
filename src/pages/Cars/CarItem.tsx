import { Car } from '../../graphql/generated';
import { FunctionComponent } from 'react';
import { STATIC_DOMAIN } from '../../shared/variables';

import BleakHeart from '../../assets/bleakheart.svg?react';

import DarkHeart from '../../assets/darkheart.svg';
import EmptyHeart from '../../assets/emptyheart.svg';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addCar,
  checkIsCarFavourite,
  removeCar,
} from '../Favourite/favouriteSlice';
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

interface CarItem {
  car: Car;
}

const CarItem: FunctionComponent<CarItem> = ({ car }: CarItem) => {
  const { img_src, model, model_year, color, price, availability, id } = car;

  const dispatch = useAppDispatch();

  const isFavourite = useAppSelector(checkIsCarFavourite(id));

  const toggleCar = () => {
    isFavourite ? dispatch(removeCar(id)) : dispatch(addCar({ ...car }));
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
                src={isFavourite ? DarkHeart : EmptyHeart}
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

export default CarItem;
