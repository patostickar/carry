import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Alerts } from '../GeneralFuntions/GeneralFuntions';


export default function CarCreate() {

 async function postCar(values){
      try {
       await axios.post('/cartypes', values);

      } catch (error) {
        console.log(error);
      }};
  

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

        if (!valores.make) {
          errores.make = 'Ingrese una marca';
        }

        if (!valores.model) {
          errores.model = 'Ingrese un modelo';
        }

        if (!valores.className) {
          errores.className = 'Ingrese un valor valido';
        }

        if (!valores.transmission) {
          errores.transmission = 'Ingrese un valor valido';
        }

        if (!valores.mpg) {
          errores.mpg = 'Ingrese un valor valido';
        }

        if (!valores.img) {
          errores.img = 'Ingrese un valor valido';
        }

        if (!valores.doors) {
          errores.doors = 'Ingrese un valor valido';
        }

        if (!valores.seats) {
          errores.seats = 'Ingrese un valor valido';
        }

        if (!valores.airConditioning) {
          errores.airConditioning = 'Ingrese un valor valido';
        }

        if (!valores.largeSuitcase) {
          errores.largeSuitcase = 'Ingrese un valor valido';
        }

        if (!valores.smallSuitcase) {
          errores.smallSuitcase = 'Ingrese un valor valido';
        }

        if (!valores.price) {
          errores.price = 'Ingrese un valor valido';
        }

        return errores;
      }}
      onSubmit={(values) => {
        // alert(JSON.stringify(values))
        postCar(values)
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
          <div>
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
          </div>

          <div>
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
          </div>


          <div>
            <label htmlFor='className'>nombre de clase</label>

            <input
              type='text'
              id='className'
              name='className'
              placeholder='A...'
              value={values.className}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.className && errors.className && (
              <div>{errors.className}</div>
            )}
          </div>

          <div>
            <label htmlFor='transmission'>Transmision</label>

            <input
              type='text'
              id='transmission'
              name='transmission'
              placeholder='Manual...'
              value={values.transmission}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.transmission && errors.transmission && (
              <div>{errors.transmission}</div>
            )}
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
            <label htmlFor='doors'>Cantidad de puertas</label>

            <input
              type='text'
              id='doors'
              name='doors'
              placeholder='4'
              value={values.doors}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.doors && errors.doors && <div>{errors.doors}</div>}
          </div>

          <div>
            <label htmlFor='seats'>Asientos</label>

            <input
              type='text'
              id='seats'
              name='seats'
              placeholder='4'
              value={values.seats}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.seats && errors.seats && <div>{errors.seats}</div>}
          </div>

          <div>
            <label htmlFor='airConditioning'>Aire acondicionado</label>

            <input
              type='text'
              id='airConditioning'
              name='airConditioning'
              placeholder='Si'
              value={values.airConditioning}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.airConditioning && errors.airConditioning && (
              <div>{errors.airConditioning}</div>
            )}
          </div>

          <div>
            <label htmlFor='largeSuitcase'>Baul grande</label>

            <input
              type='text'
              id='largeSuitcase'
              name='largeSuitcase'
              placeholder='Si'
              value={values.largeSuitcase}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.largeSuitcase && errors.largeSuitcase && (
              <div>{errors.largeSuitcase}</div>
            )}
          </div>

          <div>
            <label htmlFor='smallSuitcase'>Baul chico</label>

            <input
              type='text'
              id='smallSuitcase'
              name='smallSuitcase'
              placeholder='Si'
              value={values.smallSuitcase}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.smallSuitcase && errors.smallSuitcase && (
              <div>{errors.smallSuitcase}</div>
            )}
          </div>

          <div>
            <label htmlFor='price'>Precio</label>

            <input
              type='text'
              id='price'
              name='price'
              placeholder='Si'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.price && errors.price && <div>{errors.price}</div>}
          </div>

          <button type='Submit'>Crear</button>
        </form>
      )}
    </Formik>
  );
}
