import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: [{ key: 'transmission', value: 'Manual' }],
};

export const carsResults = createSlice({
  name: 'carsResults',
  initialState,
  reducers: {
    setCarTypes: (state, action) => {
      state.carTypes = action.payload;
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

export const { setCarTypes, setCarTypesCount } = carsResults.actions;

export default carsResults.reducer;
