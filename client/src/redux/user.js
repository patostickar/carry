import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  User: null,
};

export const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.User = action.payload;
    },
    ClearUser: (state, action) => {
      state.User = null;
    },
  },
});
export const fetchUser = (email) => async (dispatch) => {
  try {
    await axios.get(`/customers/${email}`).then((res) => {
      dispatch(SetUser(res.data));
    });
    console.log('fetched user');
  } catch (error) {
    console.log(error);
  }
};

export const { SetUser, ClearUser } = User.actions;

export default User.reducer;
