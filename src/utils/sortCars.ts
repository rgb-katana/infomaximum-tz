import { Car } from '../graphql/generated';

const extractNumericValue = (price: string): number => {
  return parseFloat(price.replace(/[^0-9.-]+/g, ''));
};

export const sortCars = (cars: Car[], sortOption: string): Car[] => {
  return cars.slice().sort((carA, carB) => {
    switch (sortOption) {
      case 'availability':
        return carB.availability ? 1 : -1;
      case 'alphabetical':
        return carA.model.localeCompare(carB.model);
      case '-alphabetical':
        return carB.model.localeCompare(carA.model);
      case 'release':
        return carB.model_year - carA.model_year;
      case '-release':
        return carA.model_year - carB.model_year;
      case 'price':
        return (
          extractNumericValue(carA.price) - extractNumericValue(carB.price)
        );
      case '-price':
        return (
          extractNumericValue(carB.price) - extractNumericValue(carA.price)
        );
      default:
        return 0;
    }
  });
};
