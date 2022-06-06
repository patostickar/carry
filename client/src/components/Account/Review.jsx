import React  from 'react';
import { Formik, Form,  } from 'formik';
import { useSelector,  } from 'react-redux';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.css';

import { Alerts } from '../GeneralFuntions/GeneralFuntions';

export default function Review() {
    const { User } = useSelector((state) => state.user);
    async function postreview(values){
      try {
         await axios.post(`/customers/reviews/${User.id}`, values);

      } catch (error) {
        console.log(error);
      }
    };


 

  return (
    <Formik
      initialValues={{
        reviews: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        postreview(values);
        // alert(JSON.stringify(values))
        Alerts('success', 'Gracias por la review');

      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form className='PostReview' onSubmit={handleSubmit}>
           <div>
            <label htmlFor='reviews'>Deje una review</label>
            <textarea id='reviews'
              name='reviews'
              placeholder='Deje una reviews'
              value={values.reviews}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
               rows="10"></textarea>   
          </div> 
          <button type='Submit'>Crear</button>
        </Form>
      )}
    </Formik>
  );
}
