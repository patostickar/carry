import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCarTypes } from '../../../redux/carsResults';
import { fetchAllLocations } from '../../../redux/searchBar';
import { Formik, Form, Field } from 'formik';
import Alerts from '../../GeneralFuntions/Alerts';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.css';
import styles from './styles/Formulario.module.css';

import DashboardSidebar from '../AdminPages/AdminComponents/sections/layouts/DashboardSidebar';
// import DashboardNavbar from '../AdminPages/AdminComponents/sections/layouts/DashboardNavBar';

// import { styled } from '@mui/material/styles';

export default function CarTypeCreate() {







  async function postCarType(values) {
    try {
      await axios.post('/cars', values, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    } catch (error) {
      console.log(error);
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

  // const APP_BAR_MOBILE = 64;
  // const APP_BAR_DESKTOP = 75;

  // const RootStyle = styled('div')({
  //   display: 'flex',
  //   minHeight: '100%',
  //   overflow: 'hidden',
  // });

  // const MainStyle = styled('div')(({ theme }) => ({
  //   flexGrow: 1,
  //   overflow: 'auto',
  //   minHeight: '100%',
  //   marginLeft: '25%',
  //   paddingTop: APP_BAR_MOBILE + 24,
  //   paddingBottom: theme.spacing(10),
  //   [theme.breakpoints.up('lg')]: {
  //     paddingTop: APP_BAR_DESKTOP,
  //     paddingLeft: theme.spacing(2),
  //     paddingRight: theme.spacing(2),
  //   },
  // }));

  return (
    <>
      {/* <RootStyle>
        <MainStyle> */}

      <div className={styles.body}>
        <div className={styles.container}>
          <DashboardSidebar />
          <Formik
            initialValues={{
              carTypeId: '',
              locationId: '',
            }}
            onSubmit={(values) => {
              if (values.carTypeId !== '' && values.locationId !== '') {
                postCarType(values);
                Alerts('success', 'Vehiculo creado');
              } else {
                Alerts('error', 'complete todos los campos');
              }
              // alert(JSON.stringify(values))
            }}
          >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
              <Form className='carTypeCreate' onSubmit={handleSubmit}>
                <div>
                  <label className={styles.input_box} htmlFor='carType'>
                    Seleccione el vehiculo
                  </label>

                  <Field
                    className={styles.field}
                    component='div'
                    id='carTypeId'
                  >
                    <select
                      className={styles.field}
                      name='carTypeId'
                      id='carTypeId'
                    >
                      <option value=''>Seleccione un tipo de auto</option>
                      {AllcarTypes.map((d) => (
                        <option
                          value={d.id || ' '}
                          id={values.carTypeId}
                          key={d.id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {`${d.make} ${d.model}, ${d.transmission}, ${d.className}, ${d.airConditioning? "con aire acondicionado":"sin aire acondicionado"} `}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className={styles.input_box} htmlFor='locationId'>
                    Seleccione la ubicacion
                  </label>
                  <Field
                    className={styles.field}
                    component='div'
                    id='locationId'
                  >
                    <select
                      className={styles.field}
                      name='locationId'
                      id='locationId'
                    >
                      <option value=''>Seleccione una agencia</option>

                      {locations.map((d) => (
                        <option
                          value={d.id || ' '}
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
          {/* </MainStyle>
      </RootStyle> */}
        </div>
      </div>
    </>
  );
}
