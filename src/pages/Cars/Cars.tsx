import { FunctionComponent, useEffect, useState } from 'react';
import { Query } from '../../graphql/generated';
import { LOAD_CARS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CarItem from './CarItem';
import Search from './Search';
import Filter from './Filter';
import { useAppSelector } from '../../hooks/reduxHooks';
import { sortCars } from '../../utils/sortCars';
import { sortOptions } from '../../shared/sortOptions';
import Spinner from '../../ui/Spinner/Spinner';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 116px;
  max-width: 1920px;
`;

const StyledCarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 150px;
`;

const StyledInstruments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const Cars: FunctionComponent = () => {
  const [cars, setCars] = useState<Query['cars']>([]);

  const options = sortOptions;

  const searchFromRedux = useAppSelector(state => state.cars.search);
  const filterFromRedux = useAppSelector(state => state.cars.filter);

  const [search, setSearch] = useState(searchFromRedux);
  const [filter, setFilter] = useState(filterFromRedux);

  const { error, loading, data } = useQuery(LOAD_CARS, {
    variables: { search: search ? search.toLowerCase() : '' },
  });

  useEffect(() => {
    if (data) {
      setCars(sortCars(data.cars, filter));
    }
  }, [data, filter]);

  return (
    <Container>
      <StyledInstruments>
        <Filter onChange={setFilter} value={filter} options={options} />
        <Search setSearch={setSearch} />
      </StyledInstruments>
      <StyledCarList>
        {!cars.length && <Spinner />}
        {cars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </StyledCarList>
    </Container>
  );
};

export default Cars;
