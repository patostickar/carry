import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  booking: {
    carTypeId: null,
    customerId: null,
    locationId: null,
    pickUpDate: null,
    dropOffDate: null,
    PremiumSecure: false,
  },
  Userbokings: [],
};

export const booking = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.booking = action.payload;
    },
    setUserBookings: (state, action) => {
      state.Userbokings = action.payload;
    },
    // updateUserBookings: (state, action) => {
    //  state.Userbokings = initialState;
    // },
    clearBookingDetails: (state, action) => {
      state = initialState;
    },
    ClearBookingState: (state, action) => {
      state.booking = initialState.booking;
    },
  },
});
export const fetchUserBokings = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/bookings/customer/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(setUserBookings(res.data));
    // .then((res) => dispatch(setCarTypes(res.data)));
  } catch (error) {
    console.log(error);
  }
};

export const putUserBookings = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/bookings/${id}`, data, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const {
  setBookingDetails,
  clearBookingDetails,
  setUserBookings,
  ClearBookingState,
} = booking.actions;

export default booking.reducer;
