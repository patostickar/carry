import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  testimonials: [],
};

export const Testimonials = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    SetTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
  },
});
export const fetchTestimonials = () => async (dispatch) => {
  try {
    await axios.get(`/bookings/reviews/`).then((res) => {
      dispatch(SetTestimonials(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const { SetTestimonials } = Testimonials.actions;

export default Testimonials.reducer;
