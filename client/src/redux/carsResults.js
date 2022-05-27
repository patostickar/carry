import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: {
    transmission: null,
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

export const { setCarTypes, setTransmission } = carsResults.actions;

export default carsResults.reducer;
