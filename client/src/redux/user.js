import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialState = {
  User: null,
};

export const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.User = action.payload;
    },
    clearUser: (state, action) => {
      state.User = null;
    },
  },
});

export const putUser = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/customers/${id}`, data).then((res) => {
      dispatch(setUser(res.data));
      Swal.fire('La informacion se ha actualizado correctamente!!');
    });
  } catch (error) {
    Swal.fire('Error: ', error.message);
    console.log(error);
  }
};

export const { setUser, clearUser } = User.actions;

export default User.reducer;
