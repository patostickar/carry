import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: {
    transmission: null,
    airConditioning: null,
    fourPlusSeats: null,
    carCategory: [],
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
      state.filters.transmission = action.payload;
    },
    setAirConditioning: (state, action) => {
      state.filters.airConditioning = action.payload;
    },
    setFourPlusSeats: (state, action) => {
      state.filters.fourPlusSeats = action.payload;
    },
    setCarCategory: (state, action) => {
      state.filters.carCategory.push(action.payload);
    },
    clearCarCategory: (state, action) => {
      state.filters.carCategory = state.filters.carCategory.filter(
        (category) => {
          console.log(category, action.payload);
          return category !== action.payload;
        }
      );
    },
    clearAllFilters: (state, _action) => {
      state.filters = {
        transmission: null,
        airConditioning: null,
        fourPlusSeats: null,
        carCategory: [],
      };
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
  clearCarCategory,
  setAirConditioning,
  setFourPlusSeats,
} = carsResults.actions;

export default carsResults.reducer;
