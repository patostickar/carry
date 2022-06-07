
import { Formik, Field } from 'formik';
import Alerts from '../Alerts';

import axios from 'axios';
import logError from '../GeneralFuntions/logError';

export default function CarCreate() {


   async function postCar(values) {
    try {
      await axios.post('/cartypes', values);
    } catch (error) {
      logError(error);
    }
  }

      // constantes locales para el drop down de los selects
      const numbers = [ "---" , 1, 2, 3, 4, 5, 6, 7]
      const baul = ["---", 0, 1, 2]
      const boolean = [{key:"Seleccione un valor", value:null}, {key:"Si", value:true}, {key:"No", value:false}]   
      const transmicion = ["Seleccione un valor", "Manual", "Automatico"]

      // constante de error para la funcion validadora
      const errormsg = 'Ingrese un valor valido'
  


  return (
    <Formik
      initialValues={{
        make: '',
        model: '',
        className: '',
        transmission: '',
        mpg: '',
        img: '',
        doors: 0,
        seats: 0,
        airConditioning: false,
        largeSuitcase: 0,
        smallSuitcase: 0,
        price: 0,
      }}
      validate={(valores) => {
        // eslint-disable-next-line prefer-const
        let errores = {};

        if (!valores.make || valores.make.length > 15) {
          errores.make = errormsg;
        }

        if (!valores.model || valores.model.length > 15) {
          errores.model = errormsg;
        }

        if (!valores.className) {
          errores.className = errormsg;
        }

        if (!valores.transmission || valores.transmission === transmicion[0] ) {
          errores.transmission = errormsg;
        }

        if (!valores.mpg) {
          errores.mpg = errormsg;
        }

        if (!valores.img.includes("https://") && !valores.img.includes("http://") ) {
          errores.img = errormsg;
        }

        if ( !valores.doors || valores.doors === "---" ) {
          errores.doors = 'Seleccione un valor por favor';
        }

        if ( !valores.airConditioning || valores.airConditioning === "null" ) {
          errores.airConditioning = 'Seleccione un valor ';
        }

        if (!valores.seats || valores.seats === "---") {
          errores.seats = 'Seleccione un valor por favor';
        }

       
        if (!valores.largeSuitcase || valores.largeSuitcase === "---") {
          errores.largeSuitcase = errormsg;
        }

        if (!valores.smallSuitcase || valores.smallSuitcase === "---") {
          errores.smallSuitcase = errormsg;
        }

        if (!valores.price || valores.price > 25000 || typeof(valores.price) === "string") {
          errores.price = errormsg;
        }

        return errores;
      }}
      onSubmit={(values) => {
                    
       
        postCar(values);

        Alerts('success', 'Vehiculo creado');
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
        <form className='CarCreate' onSubmit={handleSubmit}>
          <Field component="div">
            <label htmlFor='make'>Marca</label>

            <input
              type='text'
              id='make'
              name='make'
              placeholder='Marca'
              value={values.make}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.make && errors.make && <div>{errors.make}</div>}
          </Field>

          <Field component="div">
            <label htmlFor='model'>Modelo</label>

            <input
              type='text'
              id='model'
              name='model'
              placeholder='Modelo'
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.model && errors.model && <div>{errors.model}</div>}
            </Field>



          <Field component="div">
            <label htmlFor='className'>Clase</label>


            <input
              type='text'
              id='className'
              name='className'
              placeholder='Small...'
              value={values.className}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.className && errors.className && (
              <div>{errors.className}</div>
            )}
          </Field>

          <Field component="div">
            <label htmlFor='transmission'>Transmision</label>


            <select name="transmission" id="transmission">
            

            {transmicion.map((d) => (
              
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
            {touched.transmission && errors.transmission && (
              <div>{errors.transmission}</div>
            )}
          </Field>

          <Field component="div">
            <label htmlFor='mpg'>Millas por galon</label>

            <input
              type='text'
              id='mpg'
              name='mpg'
              placeholder='Millas por galon'
              value={values.mpg}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.mpg && errors.mpg && <div>{errors.mpg}</div>}
            </Field>

          <Field component="div">
            <label htmlFor='img'>Imagen</label>

            <input
              type='text'
              id='img'
              name='img'
              placeholder='www.imagenesbonitas.com'
              value={values.img}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.img && errors.img && <div>{errors.img}</div>}
            </Field>

          <Field component="div">
            <label htmlFor='doors'>Cantidad de puertas</label>

          


            <select name="doors" id="doors">
              
            {numbers.map((d) => (
              
            <option
                  value={d}
                  id={values.d}
                  key={d}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {`${d} Puertas`}
                </option>
                ))}
            </select>

            {touched.doors && errors.doors && <div>{errors.doors}</div>}
            </Field>

          <Field component="div">
            <label htmlFor='seats'>Asientos</label>

            {/* <input
              type='text'
              id='seats'
              name='seats'
              placeholder='4'
              value={values.seats}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}

            <select name="seats" id="seats">
            {numbers.map((d) => (
            <option
                  value={d}
                  id={values.d}
                  key={d}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {`${d} Asientos`}
                </option>
                ))}
            </select>
            {touched.seats && errors.seats && <div>{errors.seats}</div>}
            </Field>

          <Field component="div">
            <label htmlFor='airConditioning'>Aire acondicionado</label>

            
            <select name="airConditioning" id="airConditioning">
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

            {touched.airConditioning && errors.airConditioning && <div>{errors.airConditioning}</div>}
            
          </Field>

          <Field component="div">
            <label htmlFor='largeSuitcase'>Baul grande</label>

         

            <select name="largeSuitcase" id="largeSuitcase">
            {baul.map((d) => (
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
            {touched.largeSuitcase && errors.largeSuitcase && (
              <div>{errors.largeSuitcase}</div>
            )}
          </Field>

          <Field component="div">
            <label htmlFor='smallSuitcase'>Baul chico</label>

        

        <select name="smallSuitcase" id="smallSuitcase">
            {baul.map((d) => (
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
            {touched.smallSuitcase && errors.smallSuitcase && (
              <div>{errors.smallSuitcase}</div>
            )}
          </Field>

          <Field component="div">
            <label htmlFor='price'>Precio</label>

            <input
              
              type='number'
              id='price'
              name='price'
              placeholder='Solo numeros por favor'
              value={parseInt(values.price)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.price && errors.price && <div>{errors.price}</div>}
          </Field>

          <button type='Submit'>Crear</button>
        </form>
      )}
    </Formik>
  );
}
