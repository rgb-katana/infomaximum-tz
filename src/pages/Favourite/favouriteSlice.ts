import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../graphql/generated';
import { RootState } from '../../store';

interface favouriteState {
  favourites: Car[];
}

const initialState: favouriteState = {
  favourites: [
    // {
    //   id: 1,
    //   brand: 'Volvo',
    //   model: 'XC90',
    //   color: 'Жемчужно-белый металлик',
    //   model_year: 2022,
    //   img_src: '/static/images/volvo_xc90.png',
    //   price: '$54333',
    //   description:
    //     'Большой люксовый кроссовер, второе поколение которого выпускается в Швеции с 2014 года, продажи машин на российском рынке начались в 2015 году. Автомобиль оснащают бензиновыми и дизельными турбомоторами объёмом два литра. ',
    //   availability: true,
    // },
    // {
    //   id: 2,
    //   brand: 'BMW',
    //   model: 'X2',
    //   color: 'Золотой Гальваник металлик',
    //   model_year: 2017,
    //   img_src: '/static/images/bmw_x2.png',
    //   price: '$58307',
    //   description:
    //     'Баварский кроссовер спортивного типа. Автомобиль выпускается с 2017 года, и является представителем принципиально новой линейки автомобилей, выпускаемых мюнхенским автоконцерном. Новая модель относится к тому же классу, что и автомобили линеек Х1, Х3, Х5 и Х6 – компактный городской кроссовер, однако как внешне, так и технически существенно отличается от своих «собратьев».',
    //   availability: true,
    // },
  ],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<Car>) {
      state.favourites.push(action.payload);
    },
    removeCar(state, action: PayloadAction<number>) {
      state.favourites = state.favourites.filter(
        car => car.id !== action.payload
      );
    },
  },
});

export default favouriteSlice.reducer;

export const { addCar, removeCar } = favouriteSlice.actions;

export const checkIsCarFavourite =
  (carId: number) =>
  (state: RootState): boolean => {
    return state.favourites.favourites.some((car: Car) => car.id === carId);
  };
