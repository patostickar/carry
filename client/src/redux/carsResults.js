import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: {
    transmission: {
      manual: false,
      automatic: false,
    },
    airConditioning: false,
    fourPlusSeats: false,
    carCategory: {
      small: false,
      medium: false,
      large: false,
      premium: false,
      convertible: false,
      minivan: false,
      suv: false,
    },
  },
};

export const carsResults = createSlice({
  name: 'carsResults',
  initialState,
  reducers: {
    setCarTypes: (state, action) => {
      state.carTypes = action.payload;
    },
    setTransmission: (state, action) => {
      const { name, checked } = action.payload;
      state.filters.transmission[name] = checked;
    },
    setAirConditioning: (state, action) => {
      state.filters.airConditioning = action.payload;
    },
    setFourPlusSeats: (state, action) => {
      state.filters.fourPlusSeats = action.payload;
    },
    setCarCategory: (state, action) => {
      const { name, checked } = action.payload;
      state.filters.carCategory[name] = checked;
    },
    clearAllFilters: (state, _action) => {
      state.filters = initialState.filters;
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

export const {
  setCarTypes,
  setTransmission,
  setCarCategory,
  setAirConditioning,
  setFourPlusSeats,
  clearAllFilters,
} = carsResults.actions;

export default carsResults.reducer;
