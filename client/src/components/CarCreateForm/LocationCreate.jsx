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
        stateName: '',
        postalCode: '',
        lat: '',
        lon: '',
        phone: '',
        timeOpen: '',
        timeClose: '',
        airportLocation: '',
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
        if (!valores.postalCode) {
          errores.postalCode = 'Ingrese un valor';
        }
        if (!valores.lat) {
          errores.lat = 'Ingrese un valor';
        }
        if (!valores.lon) {
          errores.lon = 'Ingrese un valor';
        }
        if (!valores.stateName) {
          errores.stateName = 'Ingrese un valor';
        }
        if (!valores.phone) {
          errores.phone = 'Ingrese un valor';
        }
        if (!valores.timeOpen) {
          errores.timeOpen = 'Ingrese un valor';
        }
        if (!valores.timeClose) {
          errores.timeClose = 'Ingrese un valor';
        }
        if (!valores.airportLocation) {
          errores.airportLocation = 'Ingrese un valor';
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
              id='stateName'
              name='stateName'
              placeholder='provincia'
              value={values.stateName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.stateName && errors.stateName && (
              <div className='error'>{errors.stateName}</div>
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
            <label htmlFor='postalCode'>codigo postal</label>
            <input
              type='text'
              id='postalCode'
              name='postalCode'
              placeholder='codigo postal'
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.postalCode && errors.postalCode && (
              <div className='error'>{errors.postalCode}</div>
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
            <label htmlFor='timeOpen'>Horario de apertura</label>
            <input
              type='text'
              id='timeOpen'
              name='timeOpen'
              placeholder='08AM'
              value={values.timeOpen}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.timeOpen && errors.timeOpen && (
              <div className='error'>{errors.timeOpen}</div>
            )}
          </div>

          <div>
            <label htmlFor='timeClose'>Horario de cierre</label>
            <input
              type='text'
              id='timeClose'
              name='timeClose'
              placeholder='22PM'
              value={values.timeClose}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.timeClose && errors.timeClose && (
              <div className='error'>{errors.timeClose}</div>
            )}
          </div>

          <div>
            <label htmlFor='airportLocation'> Es aeropuerto?</label>
            <input
              type='text'
              id='airportLocation'
              name='airportLocation'
              value={values.airportLocation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.airportLocation && errors.airportLocation && (
              <div className='error'>{errors.airportLocation}</div>
            )}
          </div>

          <button type='submit'>Crea</button>
        </form>
      )}
    </Formik>
  );
}
