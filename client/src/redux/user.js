import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import logError from '../components/GeneralFuntions/logError';


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
  } catch (error) {
    logError(error);
  }
};

export const putUser = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/customers/${id}`, data).then((res) => {
      dispatch(SetUser(res.data.customer));
      Swal.fire('La informacion se ha actualizado correctamente!!')
    
    });
  } catch (error) {
    Swal.fire('Error: ', error.message);
    console.log(error);
  }
};

export const { SetUser, ClearUser } = User.actions;

export default User.reducer;
