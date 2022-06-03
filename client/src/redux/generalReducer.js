import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    testimonials : [],
    testimonialsCount: null
};

export const Generalreducer = createSlice({
  name: 'GeneralReduucer',
  initialState,
  reducers: {
    SetTestimonials: (state, action) => {
        state.testimonials = action.payload;
      },
    Setcount: (state, action) => {
        state.testimonialsCount = action.payload;
      },
  },
});

export const fetchcount = () => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:3001/customers/reviews/?id1=${id1}&id2=${id2}&id3=${id3}`)
      .then((res) => {dispatch(Setcount(res.data))});
    console.log('fetched count');
  } catch (error) {
    console.log(error);
  }
};
export const fetchTestimonials = (id1,id2,id3) => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:3001/customers/reviews/?id1=${id1}&id2=${id2}&id3=${id3}`)
      .then((res) => {dispatch(SetTestimonials(res.data))});
    console.log('fetched testimonial');
  } catch (error) {
    console.log(error);
  }
};

export const {
    SetTestimonials,
    Setcount
} = Generalreducer.actions;

export default Generalreducer.reducer;
