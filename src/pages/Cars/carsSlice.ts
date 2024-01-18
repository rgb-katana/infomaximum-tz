import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterValue =
  | 'availability'
  | 'alphabetical'
  | '-alphabetical'
  | 'release'
  | '-release'
  | 'price'
  | '-price';

interface FilterState {
  search: string;
  filter: FilterValue;
}

const initialState: FilterState = {
  search: '',
  filter: 'availability',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setNewSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setNewFilter(state, action: PayloadAction<FilterValue>) {
      state.filter = action.payload;
    },
  },
});

export default carsSlice.reducer;

export const { setNewSearch, setNewFilter } = carsSlice.actions;
