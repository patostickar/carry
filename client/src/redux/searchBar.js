import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pickup_location: null,
  dropoff_location: null,
  pickup_date: null,
  dropoff_date: null,
};

export const searchBar = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.pickup_location = action.payload;
    },
  },
});

export const { setPickupLocation } = searchBar.actions;

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
