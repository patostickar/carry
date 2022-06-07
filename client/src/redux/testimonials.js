import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import logError from '../components/GeneralFuntions/logError';

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
export const fetchTestimonials = (id1, id2, id3) => async (dispatch) => {
  try {
    await axios.get(`/customers/reviews/`).then((res) => {
      dispatch(SetTestimonials(res.data));
    });
  } catch (error) {
    logError(error);
  }
};

export const { SetTestimonials } = Testimonials.actions;

export default Testimonials.reducer;
