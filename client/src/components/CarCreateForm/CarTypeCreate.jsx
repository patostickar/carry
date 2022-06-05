import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.css';
import { fetchCarTypes } from '../../redux/carsResults';
import { fetchAllLocations } from '../../redux/searchBar';
import { Alerts } from '../GeneralFuntions/GeneralFuntions';

export default function CarTypeCreate() {
  function postCarType(values) {
    return async function () {
      try {
        const json = await axios.post('/cars', values);

        return {
          type: 'POST_CARTYPE',
          json,
        };
      } catch (error) {
        console.log(error);
      }
    };
  }

  useEffect(() => {
    dispatch(fetchCarTypes());
  }, []);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  const dispatch = useDispatch();

  const { carTypes } = useSelector((state) => state.carsResults);
  const { locations } = useSelector((state) => state.searchBar);

  return (
    <Formik
      initialValues={{
        carTypeid: '',
        locationid: '',
      }}
      onSubmit={(values) => {
        dispatch(postCarType(values));
        // alert(JSON.stringify(values))

        console.log('Se ha enviado el formulario');
        Alerts('success', 'Vehiculo creado');
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form className='carTypeCreate' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='carType'>Seleccione el vehiculo</label>

            <Field component='select' id='carTypeid'>
              {carTypes.map((d) => (
                <option
                  value={d.id}
                  id={values.carTypeid}
                  key={d.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {d.model}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <label htmlFor='location'>Seleccione la ubicacion</label>
            <Field component='select' id='locationid'>
              {locations.map((d) => (
                <option
                  value={d.id}
                  id={values.locationid}
                  key={d.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {d.name}
                </option>
              ))}
            </Field>
          </div>

          <button type='submit'>Crear</button>
        </Form>
      )}
    </Formik>
  );
}
