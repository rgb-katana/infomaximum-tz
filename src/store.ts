import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './pages/Favourite/favouriteSlice';
import carsReducer from './pages/Cars/carsSlice';

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    cars: carsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
