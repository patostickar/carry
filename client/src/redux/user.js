import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialState = {
  token: null,
  email: null,
  firstName: null,
  lastName: null,
  street: null,
  city: null,
  postalCode: null,
  phone: null,
  img: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state, action) => {
      return initialState;
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
