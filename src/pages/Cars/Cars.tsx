import { FC, useEffect, useState } from 'react';
import { Query } from '../../graphql/generated';
import { LOAD_CARS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CarItem from './CarItem';
import Search from './Search';
import Filter from './Filter';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
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
  margin-bottom: 35px;
`;

const Cars: React.FunctionComponent = () => {
  const [cars, setCars] = useState<Query['cars']>([]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const { error, loading, data } = useQuery(LOAD_CARS, {
    variables: { search: search ? search.toLowerCase() : '' },
  });

  useEffect(() => {
    console.log('Data:', data);

    if (data) {
      setCars(data.cars);
    }
  }, [data]);

  return (
    <Container>
      <StyledInstruments>
        <Filter />
        <Search setSearch={setSearch} />
      </StyledInstruments>
      <StyledCarList>
        {cars.length !== 0 &&
          cars.map(car => <CarItem car={car} key={car.id}></CarItem>)}
      </StyledCarList>
    </Container>
  );
};

export default Cars;
