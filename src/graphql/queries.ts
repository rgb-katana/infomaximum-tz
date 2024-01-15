import { gql } from '@apollo/client';

export const LOAD_CARS = gql`
  query getCars($search: String) {
    cars(search: $search) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;
