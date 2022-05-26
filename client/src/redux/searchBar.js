import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  pickup_location: null,
  dropoff_location: null,
  pickup_date: null,
  dropoff_date: null,
  locations: [],
};

export const fetchAllLocations = () => async (dispatch) => {
  try {
    await axios
      .get('http://localhost:3001/locations')
      .then((res) => dispatch(setLocationList(res.data)));
  } catch (error) {
    console.log(error);
  }
};

export const searchBar = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.pickup_location = action.payload;
    },
    setDroppOffLocation: (state, action) => {
      state.dropoff_location = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickup_date = action.payload;
    },
    setDroppOffTime: (state, action) => {
      state.dropoff_date = action.payload;
    },
    setLocationList: (state, { payload }) => {
      state.locations = payload;
    },
  },
});

export const {
  setPickupLocation,
  setDroppOffLocation,
  setPickupTime,
  setDroppOffTime,
  setLocationList,
} = searchBar.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default searchBar.reducer;
