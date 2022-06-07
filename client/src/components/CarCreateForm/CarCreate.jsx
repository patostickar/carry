import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCarTypes } from '../../redux/carsResults';
import { fetchAllLocations } from '../../redux/searchBar';
import { Formik, Form, Field } from 'formik';
import Alerts from '../Alerts';
import axios from 'axios';
import logError from '../GeneralFuntions/logError';
import 'sweetalert2/dist/sweetalert2.css';

export default function CarTypeCreate() {
  async function postCarType(values) {
    try {
      await axios.post('/cars', values);
    } catch (error) {
      logError(error);
    }
  }

  useEffect(() => {
    dispatch(fetchAllCarTypes());
  }, []);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  const dispatch = useDispatch();

  const { AllcarTypes } = useSelector((state) => state.carsResults);
  const { locations } = useSelector((state) => state.searchBar);

  return (
    <Formik
      initialValues={{
        carTypeId: '',
        locationId: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        postCarType(values);
        // alert(JSON.stringify(values))
        Alerts('success', 'Vehiculo creado');
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form className='carTypeCreate' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='carType'>Seleccione el vehiculo</label>

            <Field component='div' id='carTypeId'>
              <select name='carTypeId' id='carTypeId'>
                {AllcarTypes.map((d) => (
                  <option
                    value={d.id}
                    id={values.carTypeId}
                    key={d.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {`${d.make} ${d.model}`}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div>
            <label htmlFor='locationId'>Seleccione la ubicacion</label>
            <Field component='div' id='locationId'>
              <select name='locationId' id='locationId'>
                {locations.map((d) => (
                  <option
                    value={d.id}
                    id={values.locationId}
                    key={d.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {d.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <button type='Submit'>Crear</button>
        </Form>
      )}
    </Formik>
  );
}
