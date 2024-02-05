import CarItem, { ICarItem } from '../Cars/CarItem';
import { STATIC_DOMAIN } from '../../shared/variables';
import DefaultDelete from '../../assets/defaultdelete.svg?react';
import formatPrice from '../../utils/formatPrice';
import { FunctionComponent } from 'react';
import {
  ButtonContainer,
  DetailsPart,
  ImagePart,
  StyledButton,
  StyledCarImage,
  StyledCarName,
  StyledColor,
  StyledDeleteButton,
  StyledDescription,
  StyledListElement,
  StyledPrice,
  StyledYear,
} from './FavouriteCar.styles';
import { favouriteStore } from './favouriteStore';

const FavouriteCar: FunctionComponent<ICarItem> = ({ car }: ICarItem) => {
  return (
    <StyledListElement>
      <ImagePart>
        <StyledCarImage
          src={`${STATIC_DOMAIN + car.img_src}`}
          alt={`${car.model}`}
        />
      </ImagePart>
      <DetailsPart>
        <StyledCarName>
          {car.brand} {car.model}
        </StyledCarName>
        <StyledDescription>{car.description}</StyledDescription>
        <StyledYear>Год: {car.model_year}</StyledYear>
        <StyledColor>Цвет: {car.color}</StyledColor>
        <StyledPrice>от ${formatPrice(car.price)}</StyledPrice>
        <ButtonContainer>
          <StyledButton>Выбрать комплектацию</StyledButton>
          <StyledDeleteButton>
            <DefaultDelete
              onClick={() => {
                favouriteStore.removeCar(car.id);
              }}
            />
          </StyledDeleteButton>
        </ButtonContainer>
      </DetailsPart>
    </StyledListElement>
  );
};

export default FavouriteCar;
