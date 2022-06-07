import { Formik, Field } from 'formik';
import Alerts from '../Alerts';
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

  const provincias = ["Ciudad de Buenos Aires", "Buenos Aires", "Jujuy", "Salta", "Tucuman",
                     "San juan", "Formosa", "Corrientes", "Chaco", "Misiones",
                     "Santa Fe", "Cordoba", "San Luis", "Entre Rios", "Mendoza",
                     "Rio Negro", "Neuquen", "Santa Cruz", "Tierra Del Fuego",
                     "La Pampa", "La Rioja", "Santiago del Estero", "Chubut", "Catamarca"]


  const horarios = [ ]    
  for (let i = 0; i < 24; i++) {
    horarios.push(i)
    
  }    

  const boolean = [{key:"Seleccione un valor", value:null}, {key:"Si", value:true}, {key:"No", value:false}]
             

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
        const patt = (/^[A-Za-z0-9\s]+$/)

        if (!patt.test(valores.name) === true) {
          errores.name = 'Ingrese un valor';
        }
        if (!patt.test(valores.street) === true) {
          errores.street = 'Ingrese un condor';
        }
        if (!patt.test(valores.city) === true) {
          errores.city = 'Ingrese un valor';
        }
        if (!patt.test(valores.postalCode) === true) {
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
        if (!patt.test(valores.phone) === true) {
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
          <Field component="div">
            <label htmlFor='stateName'>provincia</label>
            <select name="stateName" id="stateName">
              
            {provincias.map((d) => (
              
            <option
                  value={d}
                  id={values.d}
                  key={d}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {`${d}`}
                </option>
                ))}
            </select>
            {touched.stateName && errors.stateName && (
              <div className='error'>{errors.stateName}</div>
            )}
          </Field>

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

          <Field component="div">
            <label htmlFor='timeOpen'>Horario de apertura</label>
         

           <select name="timeOpen" id="timeOpen">
              
              {horarios.map((d) => (
                
              <option
                    value={d}
                    id={values.d}
                    key={d}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {`${d} HS`}
                  </option>
                  ))}
              </select> 
            {touched.timeOpen && errors.timeOpen && (
              <div className='error'>{errors.timeOpen}</div>
            )}
          </Field>

          <Field component = "div">
            <label htmlFor='timeClose'>Horario de cierre</label>
           
             <select name="timeClose" id="timeClose">
              
              {horarios.map((d) => (
                
              <option
                    value={d}
                    id={values.d}
                    key={d}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {`${d} HS`}
                  </option>
                  ))}
              </select> 
            {touched.timeClose && errors.timeClose && (
              <div className='error'>{errors.timeClose}</div>
            )}
          </Field>

          <Field component="div">
            <label htmlFor='airportLocation'> Es aeropuerto?</label>
           

          <select name="airportLocation" id="airportLocation">
            {boolean.map((d) => (
            <option
                  value={d.value}
                  id={values.d}
                  key={d.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {`${d.key}`}
                </option>
                ))}
            </select>
            {touched.airportLocation && errors.airportLocation && (
              <div className='error'>{errors.airportLocation}</div>
            )}
          </Field>

          <button type='submit'>Crea</button>
        </form>
      )}
    </Formik>
  );
}
