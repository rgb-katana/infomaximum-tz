import styled from 'styled-components';
import { useAppSelector } from '../../hooks/reduxHooks';
import FavouriteCar from './FavouriteCar';
import plural from '../../utils/plural';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 116px;
  max-width: 1920px;
  margin-bottom: 50px;
`;

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
`;

const StyledDivider = styled.div`
  width: 100%;
  background-color: var(--color-gray-2);
  height: 1px;

  margin-top: 26px;
  margin-bottom: 64px;
`;

const FavouriteList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Favourite: React.FunctionComponent = () => {
  const favourites = useAppSelector(state => state.favourites.favourites);

  const favCount: number = favourites.length;

  return (
    <Container>
      <StyledHeading>
        Избранные товары — {`${favCount} `}
        {plural(favCount, { one: 'позиция', few: 'позиции', many: 'позиций' })}
      </StyledHeading>
      <StyledDivider />
      <FavouriteList>
        {favourites.map(car => (
          <FavouriteCar car={car} key={car.id} />
        ))}
      </FavouriteList>
    </Container>
  );
};

export default Favourite;
