import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllcars = () => async (dispatch) => {
    try {
      await axios
        .get('http://localhost:3001/cars')
        .then((res) => dispatch(setcars(res.data)));
    } catch (error) {
      console.log(error);
    }
  };

const initialState = {
   cars: [],
};
  export const cars = createSlice({
    name: 'cars',
    initialState,
    reducers: {
    setcars: (state, action) =>{
        state.cars = action.payload
    }
    },
  });
  
  export const {
    setcars,
  } = cars.actions;

  export default cars.reducer;
  