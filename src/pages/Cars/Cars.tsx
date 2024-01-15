import { FC, useEffect, useState } from 'react';
import carsJSON from '../../fake_cars.json';
import { Query } from '../../graphql/generated';
import { LOAD_CARS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { STATIC_DOMAIN } from '../../shared/variables';

const Cars: FC = () => {
  // const cars: Query["cars"] = carsJSON;
  const { error, loading, data } = useQuery(LOAD_CARS);
  const [cars, setCars] = useState<Query['cars']>([]);

  useEffect(() => {
    if (data) {
      setCars(data.cars);
    }
  }, [data]);

  return (
    <div>
      {cars.map(car => (
        <div key={car.id}>
          <div css={{ color: car.color.toLowerCase() }}>
            {car.brand}
            <img
              src={`${STATIC_DOMAIN}` + car?.img_src ?? undefined}
              alt={`${car.brand} ${car.model}`}
              css={{ maxWidth: '100px' }}
            />
            <span>{car.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
