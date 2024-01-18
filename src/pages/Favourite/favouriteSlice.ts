import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../graphql/generated';
import { RootState } from '../../store';

interface favouriteState {
  favourites: Car[];
}

const initialState: favouriteState = {
  favourites: [],
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
