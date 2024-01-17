import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/reduxHooks';
import CarItem from '../Cars/CarItem';
import { STATIC_DOMAIN } from '../../shared/variables';
import DefaultDelete from '../../assets/defaultdelete.svg?react';
import { removeCar } from './favouriteSlice';
import formatPrice from '../../utils/formatPrice';

const StyledListElement = styled.li`
  width: 100%;
  display: flex;
  gap: 20px;
  &:not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-gray-2);
    margin-bottom: 36px;
  }
`;

const ImagePart = styled.div``;

const DetailsPart = styled.div``;

const StyledCarImage = styled.img`
  height: 308px;
  width: 443px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-2);
`;

const StyledCarName = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 16px;
`;

const SharedTextStyles = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

const StyledDescription = styled(SharedTextStyles)`
  margin-bottom: 16px;
  max-width: 810px;
`;

const StyledYear = styled(SharedTextStyles)`
  margin-bottom: 16px;
`;

const StyledColor = styled(SharedTextStyles)`
  margin-bottom: 33px;
`;

const StyledPrice = styled(SharedTextStyles)`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 259px;
  height: 56px;
  border-radius: 5px;
  padding: 19px 34px;

  background-color: var(--color-purple-default);
  color: var(--color-gray-0);
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;

  &:hover svg {
    fill: var(--color-red-1);
  }

  &:hover svg path {
    fill: #fff;
  }

  &:active svg {
    fill: var(--color-red-2);
  }

  &:active svg rect {
    stroke: #b72121;
  }

  &:active svg path {
    fill: #fff;
  }
`;

const FavouriteCar: React.FunctionComponent<CarItem> = ({ car }: CarItem) => {
  const dispatch = useAppDispatch();

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
                dispatch(removeCar(car.id));
              }}
            />
          </StyledDeleteButton>
        </ButtonContainer>
      </DetailsPart>
    </StyledListElement>
  );
};

export default FavouriteCar;
