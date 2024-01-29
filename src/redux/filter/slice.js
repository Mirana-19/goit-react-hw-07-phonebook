import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setFilter: (_, { payload }) => {
      return payload;
    },
  },
  selectors: {
    selectFilter: state => state,
  },
});

export const filterReducer = slice.reducer;
export const { setFilter } = slice.actions;
export const { selectFilter } = slice.selectors;
