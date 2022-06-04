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
export const fetchTestimonials = (id1, id2, id3) => async (dispatch) => {
  try {
    await axios.get(`http://localhost:3001/customers/reviews/`).then((res) => {
      dispatch(SetTestimonials(res.data));
    });
    console.log('fetched testimonial');
  } catch (error) {
    console.log(error);
  }
};

export const { SetTestimonials } = Testimonials.actions;

export default Testimonials.reducer;
