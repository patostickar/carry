import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  booking: {
    carTypeId: null,
    customerId: null,
    locationId: null,
    pickUpDate: null,
    dropOffDate: null,
  },
};

export const booking = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.booking = action.payload;
    },
    clearBookingDetails: (state, action) => {
      state = initialState;
    },
  },
});

export const { setBookingDetails, clearBookingDetails } = booking.actions;

export default booking.reducer;
