import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

// Нужен ли мне этот карс слайс?
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar(state, action) {},
    removeCar(state, action) {},
  },
});

export default carsSlice.reducer;

export const { addCar, removeCar } = carsSlice.actions;
