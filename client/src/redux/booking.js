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
    PremiumSecure: false
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
      state.booking = initialState.booking

    }
    
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

export const putUserBookings = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`/bookings/${id}`, data);
     dispatch(fetchUserBokings(id));
    // dispatch(setBookingDetails(res.data));
    
  } catch (error) {
    logError(error);
  }
};



export const { setBookingDetails, clearBookingDetails, setUserBookings,ClearBookingState } =


  booking.actions;

export default booking.reducer;
