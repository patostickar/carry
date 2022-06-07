import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Alerts from '../Alerts';
import axios from 'axios';
import logError from '../GeneralFuntions/logError';
import 'sweetalert2/dist/sweetalert2.css';

export default function Review() {
  const { User } = useSelector((state) => state.user);
  async function postreview(values) {
    try {
      await axios.post(`/customers/reviews/${User.id}`, values);
    } catch (error) {
      logError(error);
    }
  }

  return (
    <Formik
      initialValues={{
        review: '',
      }}
      onSubmit={(values) => {
        postreview(values);
        Alerts('success', 'Gracias por su compartir su opinión');
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form className='PostReview' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='review'>
              ¿Cómo evaluaría experiencia con Carry?
            </label>
            <textarea
              id='review'
              name='review'
              placeholder='Compártanos su experiencia'
              value={values.review}
              onChange={handleChange}
              onBlur={handleBlur}
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <button type='Submit'>Crear</button>
        </Form>
      )}
    </Formik>
  );
}
