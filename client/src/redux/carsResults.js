import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  carTypes: [],
  AllcarTypes: [],
  sort: '',
  filters: {
    transmission: {
      manual: false,
      automático: false,
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
    setAllCarTypes: (state, action) => {
      state.AllcarTypes = action.payload;
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
  (locationId, pickUpDate, dropOffDate) => async (dispatch) => {
    pickUpDate = new Date(pickUpDate).toISOString().slice(0, 10);
    dropOffDate = new Date(dropOffDate).toISOString().slice(0, 10);
    dispatch(setCarTypes([]));
    try {
      const res = await axios.get('/cars/SearchResults', {
        params: { locationId, pickUpDate, dropOffDate },
      });
      dispatch(setCarTypes(res.data));
      // .then((res) => dispatch(setCarTypes(res.data)));
    } catch (error) {
      console.log(error);
    }
  };
export const fetchAllCarTypes = () => async (dispatch) => {
  try {
    const res = await axios.get('/carTypes', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(setAllCarTypes(res.data));
    // .then((res) => dispatch(setCarTypes(res.data)));
  } catch (error) {
    console.log(error);
  }
};

export const {
  setCarTypes,
  setAllCarTypes,
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
