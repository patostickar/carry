import { Formik } from 'formik';
import { Alerts } from '../GeneralFuntions/GeneralFuntions';
import axios from 'axios';
import logError from '../GeneralFuntions/logError';

export default function LocationCreate() {
  async function postLocation(values) {
    try {
      await axios.post('/locations', values);
    } catch (error) {
      logError(error);
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        street: '',
        city: '',
        state_name: '',
        postal_code: '',
        lat: '',
        lon: '',
        phone: '',
        time_open: '',
        time_close: '',
        airport_location: '',
      }}
      validate={(valores) => {
        // eslint-disable-next-line prefer-const
        let errores = {};

        if (!valores.name) {
          errores.name = 'Ingrese un valor';
        }
        if (!valores.street) {
          errores.street = 'Ingrese un valor';
        }
        if (!valores.city) {
          errores.city = 'Ingrese un valor';
        }
        if (!valores.postal_code) {
          errores.postal_code = 'Ingrese un valor';
        }
        if (!valores.lat) {
          errores.lat = 'Ingrese un valor';
        }
        if (!valores.lon) {
          errores.lon = 'Ingrese un valor';
        }
        if (!valores.state_name) {
          errores.state_name = 'Ingrese un valor';
        }
        if (!valores.phone) {
          errores.phone = 'Ingrese un valor';
        }
        if (!valores.time_open) {
          errores.time_open = 'Ingrese un valor';
        }
        if (!valores.time_close) {
          errores.time_close = 'Ingrese un valor';
        }
        if (!valores.airport_location) {
          errores.airport_location = 'Ingrese un valor';
        }

        return errores;
      }}
      onSubmit={(values) => {
        postLocation(values);
        Alerts('success', 'location creado');
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form className='LocationCreate' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Nombre</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='nombre'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <div className='error'>{errors.name}</div>
            )}
          </div>

          <div>
            <label htmlFor='street'>Direccion</label>
            <input
              type='text'
              id='street'
              name='street'
              placeholder='direccion'
              value={values.street}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.street && errors.street && (
              <div className='error'>{errors.street}</div>
            )}
          </div>
          <div>
            <label htmlFor='city'>ciudad</label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='cuidad'
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.city && errors.city && (
              <div className='error'>{errors.city}</div>
            )}
          </div>
          <div>
            <label htmlFor='city'>provincia</label>
            <input
              type='text'
              id='state_name'
              name='state_name'
              placeholder='provincia'
              value={values.state_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.state_name && errors.state_name && (
              <div className='error'>{errors.state_name}</div>
            )}
          </div>

          <div>
            <label htmlFor='lat'>latitud </label>
            <input
              type='text'
              id='lat'
              name='lat'
              placeholder='latitud'
              value={values.lat}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lat && errors.lat && (
              <div className='error'>{errors.lat}</div>
            )}
          </div>
          <div>
            <label htmlFor='lon'>longitud </label>
            <input
              type='text'
              id='lon'
              name='lon'
              placeholder='longitud'
              value={values.lon}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lon && errors.lon && (
              <div className='error'>{errors.lon}</div>
            )}
          </div>
          <div>
            <label htmlFor='postal_code'>codigo postal</label>
            <input
              type='text'
              id='postal_code'
              name='postal_code'
              placeholder='codigo postal'
              value={values.postal_code}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.postal_code && errors.postal_code && (
              <div className='error'>{errors.postal_code}</div>
            )}
          </div>

          <div>
            <label htmlFor='phone'>Telefono</label>
            <input
              type='number'
              id='phone'
              name='phone'
              placeholder='+5491155254522'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <div className='error'>{errors.phone}</div>
            )}
          </div>

          <div>
            <label htmlFor='time_open'>Horario de apertura</label>
            <input
              type='text'
              id='time_open'
              name='time_open'
              placeholder='08AM'
              value={values.time_open}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.time_open && errors.time_open && (
              <div className='error'>{errors.time_open}</div>
            )}
          </div>

          <div>
            <label htmlFor='time_close'>Horario de cierre</label>
            <input
              type='text'
              id='time_close'
              name='time_close'
              placeholder='22PM'
              value={values.time_close}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.time_close && errors.time_close && (
              <div className='error'>{errors.time_close}</div>
            )}
          </div>

          <div>
            <label htmlFor='airport_location'> Es aeropuerto?</label>
            <input
              type='text'
              id='airport_location'
              name='airport_location'
              value={values.airport_location}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.airport_location && errors.airport_location && (
              <div className='error'>{errors.airport_location}</div>
            )}
          </div>

          <button type='submit'>Crea</button>
        </form>
      )}
    </Formik>
  );
}
