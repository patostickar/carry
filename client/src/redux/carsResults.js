import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: [],
};

export const carsResults = createSlice({
  name: 'carsResults',
  initialState,
  reducers: {
    setCarTypes: (state, action) => {
      state.carTypes = action.payload;
    },
    setFilters: (state, action) => {
      state.filters.push(action.payload);
    },
    removeFilters: (state, action) => {
      state.filters = state.filters.filter(
        (f) => f.value !== action.payload.value
      );
    },
  },
});

export const fetchCarTypes = (pickupLocation) => async (dispatch) => {
  try {
    await axios
      // .get(`http://localhost:3001/cartype/count/${pickupLocation}`)
      // .then((res) => dispatch(setCarTypes(res.data)));
      .get(`http://localhost:3001/cartype`)
      .then((res) => dispatch(setCarTypes(res.data)));
  } catch (error) {
    console.log(error);
  }
};

export const { setCarTypes, setFilters, removeFilters } = carsResults.actions;

export default carsResults.reducer;
