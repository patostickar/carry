import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  sort: '',
  filters: {
    transmission: {
      manual: false,
      automatic: false,
    },
    airConditioning: false,
    fourPlusSeats: false,
    carCategory: {
      pequeño: false,
      mediano: false,
      grande: false,
      premium: false,
      convertible: false,
      minivan: false,
      suvs: false,
    },
    carMakes: [],
  },
};

export const carsResults = createSlice({
  name: 'carsResults',
  initialState,
  reducers: {
    setCarTypes: (state, action) => {
      state.carTypes = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
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
    setOneCarCategory: (state, action) => {
      const { name } = action.payload;
      const oneCarCategory = { ...initialState.filters.carCategory };
      oneCarCategory[name] = true;
      state.filters.carCategory = oneCarCategory;
    },
    setCarMake: (state, action) => {
      state.filters.carMakes = action.payload;
    },
    clearAllFilters: (state, _action) => {
      state.filters = initialState.filters;
    },
  },
});

export const fetchCarTypes =
  (pickUpLocationId, pickUpDate, dropOffDate) => async (dispatch) => {
    pickUpDate = new Date(pickUpDate).toISOString().slice(0, 10);
    dropOffDate = new Date(dropOffDate).toISOString().slice(0, 10);
    dispatch(setCarTypes([]));
    try {
      const res = await axios.get('http://localhost:3001/cars/SearchResults', {
        params: { pickUpLocationId, pickUpDate, dropOffDate },
      });
      dispatch(setCarTypes(res.data));
      // .then((res) => dispatch(setCarTypes(res.data)));
      console.log('fetched car types');
    } catch (error) {
      console.log(error);
    }
  };

export const {
  setCarTypes,
  setSort,
  setTransmission,
  setAirConditioning,
  setFourPlusSeats,
  setCarCategory,
  setOneCarCategory,
  setCarMake,
  clearAllFilters,
} = carsResults.actions;

export default carsResults.reducer;
