import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import logError from '../components/GeneralFuntions/logError';

const initialState = {
  booking: {
    carTypeId: null,
    customerId: null,
    locationId: null,
    pickUpDate: null,
    dropOffDate: null,
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
    clearBookingDetails: (state, action) => {
      state = initialState;
    },
  },
});
export const fetchUserBokings = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/bookings/customer/${id}`);
    dispatch(setUserBookings(res.data));
    // .then((res) => dispatch(setCarTypes(res.data)));
  } catch (error) {
    logError(error);
  }
};

export const { setBookingDetails, clearBookingDetails, setUserBookings } =
  booking.actions;

export default booking.reducer;
