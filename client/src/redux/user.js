import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

const initialState = {
  id: '',
  token: '',
  email: '',
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  postalCode: '',
  phone: '',
  img: '',
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
      dispatch(setUser(res.data.customer));
      Swal.fire(res.data.msg);
    });
  } catch (error) {
    Swal.fire('Error: ', error.response.data);
    console.log(error);
  }
};

export const { setUser, clearUser } = user.actions;

export default user.reducer;
