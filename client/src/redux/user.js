import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialState = {
  user: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data.customer;
    },
    clearUser: (state, action) => {
      state.user = null;
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

export const { setUser, clearUser } = user.actions;

export default user.reducer;
