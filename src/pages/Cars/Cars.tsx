import { FC, useEffect, useState } from 'react';
import carsJSON from '../../fake_cars.json';
import { Query } from '../../graphql/generated';
import { loadCars } from '../../graphql/queries';
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

const Cars: FC = () => {
  // const cars: Query["cars"] = carsJSON;
  const { error, loading, data } = useQuery(loadCars(''));
  const [cars, setCars] = useState<Query['cars']>([]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (data) {
      setCars(data.cars);
    }
  }, [data]);

  useEffect(() => {
    console.log(search);
    const searched = cars.filter(car => {
      return car.model.toLowerCase().includes(search.toLowerCase());
    });
    console.log(cars);
    // const { error, loading, data } = useQuery(loadCars(search));
    setCars(searched);
  }, [search]);

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
