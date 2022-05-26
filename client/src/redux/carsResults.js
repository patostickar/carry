import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  filters: [],
};

export const carResults = createSlice({
  name: 'carResults',
  initialState,
  reducers: {
    setCarTypes: (state, action) => {
      state.carTypes = action.payload;
    },
  },
});

export const fetchCarTypes = () => async (dispatch) => {
  try {
    await axios
      .get('http://localhost:3001/cartype')
      .then((res) => dispatch(setCarTypes(res.data)));
  } catch (error) {
    console.log(error);
  }
};

export const { setCarTypes } = carResults.actions;

export default carResults.reducer;
