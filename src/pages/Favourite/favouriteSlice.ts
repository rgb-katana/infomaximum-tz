import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../graphql/generated';

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
      state.favourites.filter(car => car.id !== action.payload);
    },
  },
});

export default favouriteSlice.reducer;

export const { addCar, removeCar } = favouriteSlice.actions;
