import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customerId: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.customerId = action.payload;
    },
    clearUserId: (state, action) => {
      state.customerId = initialState;
    },
  },
});

export const fetchUser = (email) => async (dispatch) => {
  try {
    await axios.get(`/customers/${email}`).then((res) => {
      dispatch(setUserId(res.data));
    });
    console.log('fetched user');
  } catch (error) {
    console.log(error);
  }
};

export const { setUserId, clearUserId } = user.actions;

export default user.reducer;
